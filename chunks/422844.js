n.d(t, {
    R: () => A,
    p: () => O,
}),
    n(896048);
var i = n(284009),
    s = n.n(i),
    r = n(353640),
    l = n(371444),
    a = n(392421),
    o = n(602137),
    c = n(121894),
    d = n(311907),
    u = n(734057),
    h = n(679804);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let p = new Set(),
    f = {
        layoutType: l.C.LIST,
        sortOrder: o.T.CREATION_DATE,
        tagFilter: p,
        scrollPosition: 0,
        tagSetting: a.n.MATCH_SOME,
    };
class v {
    constructor(e, t) {
        g(this, "set", void 0),
            g(this, "get", void 0),
            g(this, "channelStates", void 0),
            g(this, "setChannelState", void 0),
            g(this, "getChannelState", void 0),
            g(this, "toggleTagFilter", void 0),
            g(this, "setTagFilter", void 0),
            g(this, "setSortOrder", void 0),
            g(this, "setLayoutType", void 0),
            g(this, "setTagSetting", void 0),
            g(this, "setScrollPosition", void 0),
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
                let n = this.get(),
                    i = this.getChannelState(e),
                    s = m({}, n.channelStates);
                (s[e] = m({}, i, t)),
                    (0, c.r)(() =>
                        this.set({
                            channelStates: s,
                        }),
                    );
            }),
            (this.getChannelState = (e) => {
                if (null == e) return f;
                let { channelStates: t } = this.get(),
                    n = t[e];
                if (null == n) {
                    let t = u.A.getChannel(e);
                    s()(null != t, "[Forum Channel Store] The channel should not be missing."),
                        (n = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: p,
                            scrollPosition: 0,
                            tagSetting: t.getDefaultTagSetting(),
                        });
                }
                return n;
            }),
            (this.toggleTagFilter = (e, t) => {
                let n = new Set(this.getChannelState(e).tagFilter);
                n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
            }),
            (this.setTagFilter = (e, t) => {
                this.setChannelState(e, {
                    tagFilter: t,
                }),
                    h.A.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
                this.setChannelState(e, {
                    sortOrder: t,
                }),
                    h.A.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
                this.setChannelState(e, {
                    layoutType: t,
                }),
                    h.A.setLayout(t);
            }),
            (this.setTagSetting = (e, t) => {
                this.setChannelState(e, {
                    tagSetting: t,
                }),
                    h.A.setTagSetting(t);
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, {
                    scrollPosition: t,
                });
            });
    }
}
let b = (0, r.v)((e, t) => new v(e, t)),
    A = (e) => {
        let t = b();
        return null == (0, d.bG)([u.A], () => u.A.getChannel(e)) ? f : t.getChannelState(e);
    },
    O = () => b;
