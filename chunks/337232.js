var n = l(736553),
    a = l(382541);
l.d(
    t,
    {},
    {
        s: async function (e, t, l) {
            let r,
                { ticket: i, baseUrl: s } = await (0, a.dv)(e),
                u = new n.u();
            try {
                await new Promise((e, n) => {
                    ((r = setTimeout(() => n(Error("Timed out sending the message")), 2e4)),
                        u.open({
                            url: s,
                            ticket: i,
                            onEvent: (a) => {
                                if ("hello" === a.type)
                                    try {
                                        u.sendUserMessage(t, l);
                                    } catch (e) {
                                        n(e);
                                    }
                                else
                                    "user_message" === a.type && a.nonce === l
                                        ? e()
                                        : "step" === a.type &&
                                          "turn_result" === a.kind &&
                                          "error" === a.result &&
                                          null == a.turn_id &&
                                          n(Error(a.summary ?? "The message was refused"));
                            },
                            onClose: () => n(Error("Connection closed before the message was stored")),
                        }));
                });
            } finally {
                (clearTimeout(r), u.close());
            }
        },
    },
);
