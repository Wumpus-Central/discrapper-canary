(i.d(e, {
    H: () => b,
    v: () => S
}),
    i(388685));
var n = i(512722),
    r = i.n(n),
    s = i(97519),
    o = i(313361),
    l = i(697988),
    a = i(683860),
    d = i(731965),
    u = i(442837),
    c = i(592125),
    h = i(559241);
function p(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                p(t, e, i[e]);
            }));
    }
    return t;
}
let f = new Set(),
    m = {
        layoutType: o.X.LIST,
        sortOrder: a.z.CREATION_DATE,
        tagFilter: f,
        scrollPosition: 0,
        tagSetting: l.z.MATCH_SOME
    };
class v {
    constructor(t, e) {
        (p(this, 'set', void 0),
            p(this, 'get', void 0),
            p(this, 'channelStates', void 0),
            p(this, 'setChannelState', void 0),
            p(this, 'getChannelState', void 0),
            p(this, 'toggleTagFilter', void 0),
            p(this, 'setTagFilter', void 0),
            p(this, 'setSortOrder', void 0),
            p(this, 'setLayoutType', void 0),
            p(this, 'setTagSetting', void 0),
            p(this, 'setScrollPosition', void 0),
            (this.set = t),
            (this.get = e),
            (this.channelStates = {}),
            (this.setChannelState = (t, e) => {
                let i = this.get(),
                    n = this.getChannelState(t),
                    r = g({}, i.channelStates);
                ((r[t] = g({}, n, e)), (0, d.j)(() => this.set({ channelStates: r })));
            }),
            (this.getChannelState = (t) => {
                if (null == t) return m;
                let { channelStates: e } = this.get(),
                    i = e[t];
                if (null == i) {
                    let e = c.Z.getChannel(t);
                    (r()(null != e, '[Forum Channel Store] The channel should not be missing.'),
                        (i = {
                            layoutType: e.getDefaultLayout(),
                            sortOrder: e.getDefaultSortOrder(),
                            tagFilter: f,
                            scrollPosition: 0,
                            tagSetting: e.getDefaultTagSetting()
                        }));
                }
                return i;
            }),
            (this.toggleTagFilter = (t, e) => {
                let i = new Set(this.getChannelState(t).tagFilter);
                (i.has(e) ? i.delete(e) : i.add(e), this.setTagFilter(t, i));
            }),
            (this.setTagFilter = (t, e) => {
                (this.setChannelState(t, { tagFilter: e }), h.Z.setFilterTagIds(e));
            }),
            (this.setSortOrder = (t, e) => {
                (this.setChannelState(t, { sortOrder: e }), h.Z.setSortOrder(e));
            }),
            (this.setLayoutType = (t, e) => {
                (this.setChannelState(t, { layoutType: e }), h.Z.setLayout(e));
            }),
            (this.setTagSetting = (t, e) => {
                (this.setChannelState(t, { tagSetting: e }), h.Z.setTagSetting(e));
            }),
            (this.setScrollPosition = (t, e) => {
                this.setChannelState(t, { scrollPosition: e });
            }));
    }
}
let O = (0, s.U)((t, e) => new v(t, e)),
    b = (t) => {
        let e = O();
        return null == (0, u.e7)([c.Z], () => c.Z.getChannel(t)) ? m : e.getChannelState(t);
    },
    S = () => O;
