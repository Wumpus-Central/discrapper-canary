"use strict";
n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var a = n(417597),
    s = n(834730),
    i = n(573613),
    r = n(355622),
    o = n(349688),
    d = n(914905),
    c = n(302487),
    u = n(522602),
    m = n(985018),
    h = n(343151);
function g(e) {
    let { parentChannel: t } = e,
        n = (0, a.yK)([u.A], () => {
            let e = u.A.getUploads(t.id, r.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, l.jsxs)("div", {
        className: h.kL,
        children: [
            (0, l.jsx)(s.E, { variant: "text-md/semibold", color: "text-muted", children: m.intl.string(m.t.omKGKu) }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: m.intl.string(m.t["zUjLl+"]) }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(i.Ip, {
                    className: h.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, l.jsxs)("div", {
                        className: h.p8,
                        children: [
                            n.map((e) =>
                                (0, l.jsx)(
                                    d.A,
                                    {
                                        channelId: t.id,
                                        draftType: r.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: o.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, l.jsx)(c.A, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
