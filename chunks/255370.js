"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(417597),
    s = n(397927),
    a = n(355622),
    r = n(349688),
    o = n(914905),
    d = n(302487),
    c = n(522602),
    u = n(985018),
    m = n(359618);
function h(e) {
    let { parentChannel: t } = e,
        n = (0, i.yK)([c.A], () => {
            let e = c.A.getUploads(t.id, a.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, l.jsxs)("div", {
        className: m.kL,
        children: [
            (0, l.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: u.intl.string(u.t.omKGKu),
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: u.intl.string(u.t["zUjLl+"]),
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(s.IpV, {
                    className: m.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, l.jsxs)("div", {
                        className: m.p8,
                        children: [
                            n.map((e) =>
                                (0, l.jsx)(
                                    o.A,
                                    {
                                        channelId: t.id,
                                        draftType: a.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: r.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, l.jsx)(d.A, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
