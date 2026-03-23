n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(732955),
    s = n(843472),
    o = n(355622),
    c = n(148355),
    d = n(406704),
    u = n(696451),
    _ = n(576705),
    m = n(287809),
    A = n(954571),
    E = n(661191),
    I = n(460350),
    T = n(652215),
    f = n(48447);
function N(e) {
    let { assets: t, currentUser: n, message: i } = e,
        a = (E.default.extractTimestamp(n.id) + E.default.extractTimestamp(i.id)) % t.length;
    return t[a];
}
function C(e) {
    let { currentUser: t, channel: n, message: l, buttonLabels: d, stickers: u, event: _, eventProperties: m } = e,
        E = a.useMemo(() => N({ assets: u, currentUser: t, message: l }), [u, t, l]),
        T = a.useMemo(() => N({ assets: d, currentUser: t, message: l }), [d, t, l]),
        f = a.useCallback(async () => {
            let { valid: e } = await (0, I.i)({ type: o.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    s.A.sendGreetMessage(
                        t.id,
                        i.id,
                        s.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: l, sticker: E }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && A.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: E, event: _, eventProperties: m }));
        }, [n, l, E, _, m]);
    return (0, i.jsx)(r.$nd, {
        icon: { type: "sticker", asset: E, component: c.A },
        text: T,
        onClick: f,
        variant: "secondary",
    });
}
function g(e) {
    let { channel: t, message: n, buttonLabels: a, stickers: r, event: s, eventProperties: o } = e,
        c = m.default.getCurrentUser(),
        A = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, l.bG)([_.A, u.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let a = (0, d.UJ)(t),
                    l = _.A.can(T.xBc.SEND_MESSAGES, t),
                    r = u.Ay.getMember(e, i.id)?.isPending,
                    s = n.author.bot;
                return l && !a && !r && !s;
            });
        })({ channel: t, message: n, currentUser: c });
    return null != c && A
        ? (0, i.jsx)("div", {
              className: f.S,
              children: (0, i.jsx)(C, {
                  currentUser: c,
                  channel: t,
                  message: n,
                  buttonLabels: a,
                  stickers: r,
                  event: s,
                  eventProperties: o,
              }),
          })
        : null;
}
