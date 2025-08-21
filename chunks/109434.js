i.d(t, {
    H: () => b,
    v: () => S,
}),
    i(388685);
var n = i(512722),
    r = i.n(n),
    s = i(879690),
    o = i(313361),
    l = i(697988),
    a = i(683860),
    d = i(731965),
    c = i(442837),
    u = i(592125),
    h = i(559241);
function p(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                p(e, t, i[t]);
            });
    }
    return e;
}
let m = new Set(),
    f = {
        layoutType: o.X.LIST,
        sortOrder: a.z.CREATION_DATE,
        tagFilter: m,
        scrollPosition: 0,
        tagSetting: l.z.MATCH_SOME,
    };
class v {
    constructor(e, t) {
        p(this, "set", void 0),
            p(this, "get", void 0),
            p(this, "channelStates", void 0),
            p(this, "setChannelState", void 0),
            p(this, "getChannelState", void 0),
            p(this, "toggleTagFilter", void 0),
            p(this, "setTagFilter", void 0),
            p(this, "setSortOrder", void 0),
            p(this, "setLayoutType", void 0),
            p(this, "setTagSetting", void 0),
            p(this, "setScrollPosition", void 0),
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
                let i = this.get(),
                    n = this.getChannelState(e),
                    r = g({}, i.channelStates);
                (r[e] = g({}, n, t)), (0, d.j)(() => this.set({ channelStates: r }));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return f;
                let { channelStates: t } = this.get(),
                    i = t[e];
                if (null == i) {
                    let t = u.Z.getChannel(e);
                    r()(null != t, "[Forum Channel Store] The channel should not be missing."),
                        (i = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: m,
                            scrollPosition: 0,
                            tagSetting: t.getDefaultTagSetting(),
                        });
                }
                return i;
            }),
            (this.toggleTagFilter = (e, t) => {
                let i = new Set(this.getChannelState(e).tagFilter);
                i.has(t) ? i.delete(t) : i.add(t), this.setTagFilter(e, i);
            }),
            (this.setTagFilter = (e, t) => {
                this.setChannelState(e, { tagFilter: t }), h.Z.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
                this.setChannelState(e, { sortOrder: t }), h.Z.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
                this.setChannelState(e, { layoutType: t }), h.Z.setLayout(t);
            }),
            (this.setTagSetting = (e, t) => {
                this.setChannelState(e, { tagSetting: t }), h.Z.setTagSetting(t);
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, { scrollPosition: t });
            });
    }
}
let O = (0, s.U)((e, t) => new v(e, t)),
    b = (e) => {
        let t = O();
        return null == (0, c.e7)([u.Z], () => u.Z.getChannel(e)) ? f : t.getChannelState(e);
    },
    S = () => O;
