n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(541716),
    s = n(859235),
    o = n(898463),
    c = n(76451),
    d = n(117530),
    u = n(388032),
    m = n(557568);
function h(e) {
    let { parentChannel: t } = e,
        n = (0, r.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, a.Ie.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: u.intl.string(u.t.omKGKi)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.zUjLl5)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.zJl, {
                    className: m.uploadsContainer,
                    orientation: 'horizontal',
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)('div', {
                        className: m.uploads,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    o.Z,
                                    {
                                        channelId: t.id,
                                        draftType: a.Ie.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: s.q.SMALL
                                    },
                                    e.id
                                )
                            ),
                            (0, i.jsx)(c._, { channelId: t.id })
                        ]
                    })
                })
            })
        ]
    });
}
