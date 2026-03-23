n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(141468),
    r = n(963852),
    o = n(763754),
    d = n(20851),
    c = n(253932),
    u = n(652215),
    _ = n(985018),
    m = n(62049),
    g = n(513653);
function A() {
    let e = c.hH.useSetting(),
        [t] = s.useState(() => {
            let e = (0, a.rh)({
                ...(0, r.Ay)({
                    channelId: "1337",
                    content: _.intl.formatToPlainString(_.t.bB80LC, {
                        previewLink: "https://discord.com/accessibility",
                    }),
                }),
                state: u.cmJ.SENT,
                id: "0",
            });
            return (e.colorString = "green"), e;
        });
    return (0, i.jsx)(l.M1G, {
        children: (0, i.jsxs)(l.ZpM, {
            className: m.VH,
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("div", {
                    className: m.yl,
                    children: [
                        (0, i.jsx)(l.Button, { variant: "primary", size: "sm", text: _.intl.string(_.t["2RHHgz"]) }),
                        (0, i.jsx)("div", {
                            className: m.hD,
                            children: [u.clD.ONLINE, u.clD.DND, u.clD.IDLE].map((e) =>
                                (0, i.jsx)(
                                    l.JsQ,
                                    { "aria-label": _.intl.string(_.t.lqaIxI), src: g, size: l._3J.SIZE_32, status: e },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: m.QS,
                    children: (0, i.jsx)(d.A, {
                        compact: e,
                        author: { ...(0, o.p_)(t), colorString: "#DD80F4" },
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
