n.d(t, { Z: () => f });
var a = n(54381);
n(473749);
var r = n(399606),
    i = n(481060),
    l = n(541716),
    s = n(859235),
    o = n(898463),
    c = n(76451),
    d = n(117530),
    u = n(388032),
    m = n(279890);
function f(e) {
    let { parentChannel: t } = e,
        n = (0, r.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, a.jsxs)("div", {
        className: m.container,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: u.intl.string(u.t.omKGKu),
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: u.intl.string(u.t["zUjLl+"]),
            }),
            (0, a.jsx)("div", {
                children: (0, a.jsx)(i.zJl, {
                    className: m.uploadsContainer,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, a.jsxs)("div", {
                        className: m.uploads,
                        children: [
                            n.map((e) =>
                                (0, a.jsx)(
                                    o.Z,
                                    {
                                        channelId: t.id,
                                        draftType: l.Ie.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: s.q.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, a.jsx)(c._, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
