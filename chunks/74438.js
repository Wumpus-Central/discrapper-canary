i.r(t),
    i.d(t, {
        default: function () {
            return f;
        }
    });
var n = i(200651),
    a = i(192379),
    r = i(399606),
    o = i(626135),
    l = i(894653),
    c = i(738130),
    s = i(132871),
    d = i(961106),
    u = i(62413),
    _ = i(603406),
    p = i(165209),
    h = i(981631),
    m = i(400435);
function f() {
    let e = (0, s.useApplicationDirectoryHistory)((e) => e.guildId),
        t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        i = (0, s.getPreviousView)();
    return (
        a.useEffect(() => {
            o.default.track(h.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: s.ApplicationDirectoryViews.HOME,
                previous_page: null == i ? void 0 : i.type,
                guild_id: e,
                referrer: document.referrer
            });
        }, [e, i]),
        (0, n.jsxs)(c.Z, {
            children: [
                (0, n.jsx)(_.Z, {}),
                null != t && t.length > 0 && (0, n.jsx)(d.Z, { className: m.categoryList }),
                (0, n.jsx)('main', {
                    className: m.collectionsContainer,
                    children: (0, n.jsx)(u.Z, {})
                }),
                (0, n.jsx)(p.Z, {})
            ]
        })
    );
}
