n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(481060),
    l = n(541716),
    s = n(859235),
    o = n(898463),
    c = n(76451),
    d = n(117530),
    u = n(388032),
    m = n(791745);
function h(e) {
    let { parentChannel: t } = e,
        n = (0, i.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: u.intl.string(u.t.omKGKu),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: u.intl.string(u.t["zUjLl+"]),
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(a.zJl, {
                    className: m.uploadsContainer,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, r.jsxs)("div", {
                        className: m.uploads,
                        children: [
                            n.map((e) =>
                                (0, r.jsx)(
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
                            (0, r.jsx)(c._, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
