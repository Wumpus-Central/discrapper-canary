n.d(t, {
    Z: function () {
        return h;
    }
});
var a = n(200651);
n(192379);
var i = n(399606),
    r = n(481060),
    l = n(541716),
    s = n(859235),
    o = n(898463),
    c = n(76451),
    d = n(117530),
    u = n(388032),
    m = n(502560);
function h(e) {
    let { parentChannel: t } = e,
        n = (0, i.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, a.jsxs)('div', {
        className: m.container,
        children: [
            (0, a.jsx)(r.Text, {
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: u.intl.string(u.t.omKGKi)
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.zUjLl5)
            }),
            (0, a.jsx)('div', {
                children: (0, a.jsx)(r.ScrollerThin, {
                    className: m.uploadsContainer,
                    orientation: 'horizontal',
                    paddingFix: !1,
                    fade: !0,
                    children: (0, a.jsxs)('div', {
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
                                        size: s.q.SMALL
                                    },
                                    e.id
                                )
                            ),
                            (0, a.jsx)(c._, { channelId: t.id })
                        ]
                    })
                })
            })
        ]
    });
}
