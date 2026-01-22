n.d(t, {
    Fr: () => u,
    JX: () => d,
    YR: () => o,
    eM: () => s,
    kq: () => c,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var l = n(976860),
    a = n(767599),
    r = n(310419),
    i = n(652215);
let s = () => {
        let e = {
            previousView: (0, r.R4)(),
        };
        (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS, {
            state: e,
        });
    },
    c = (e) => {
        let { categoryId: t } = e,
            n = {
                previousView: (0, r.R4)(),
            };
        (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), {
            state: n,
        });
    },
    o = (e) => {
        let { applicationId: t } = e,
            n = {
                previousView: (0, r.R4)(),
            };
        (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), {
            state: n,
        });
    },
    d = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = {
                previousView: (0, r.R4)(),
            },
            c = new URLSearchParams();
        null != e && "" !== e && c.set("q", e),
            null != t && t !== a.lj && c.set("category_id", t.toString()),
            null != n && n > 1 && c.set("page", n.toString()),
            (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
                state: s,
                search: c.toString(),
            });
    },
    u = (e) => {
        let {
            location: { state: t },
        } = (0, l.JK)();
        (0, l.bG)(e, t);
    };
