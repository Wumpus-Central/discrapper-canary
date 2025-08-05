(n.d(t, {
    H: () => y,
    v: () => j
}),
    n(388685));
var r = n(512722),
    i = n.n(r),
    l = n(97519),
    a = n(313361),
    s = n(697988),
    o = n(683860),
    c = n(731965),
    d = n(442837),
    u = n(592125),
    h = n(559241);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
let g = new Set(),
    m = {
        layoutType: a.X.LIST,
        sortOrder: o.z.CREATION_DATE,
        tagFilter: g,
        scrollPosition: 0,
        tagSetting: s.z.MATCH_SOME
    };
class b {
    constructor(e, t) {
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
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
                let n = this.get(),
                    r = this.getChannelState(e),
                    i = f({}, n.channelStates);
                ((i[e] = f({}, r, t)), (0, c.j)(() => this.set({ channelStates: i })));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return m;
                let { channelStates: t } = this.get(),
                    n = t[e];
                if (null == n) {
                    let t = u.Z.getChannel(e);
                    (i()(null != t, '[Forum Channel Store] The channel should not be missing.'),
                        (n = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: g,
                            scrollPosition: 0,
                            tagSetting: t.getDefaultTagSetting()
                        }));
                }
                return n;
            }),
            (this.toggleTagFilter = (e, t) => {
                let n = new Set(this.getChannelState(e).tagFilter);
                (n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n));
            }),
            (this.setTagFilter = (e, t) => {
                (this.setChannelState(e, { tagFilter: t }), h.Z.setFilterTagIds(t));
            }),
            (this.setSortOrder = (e, t) => {
                (this.setChannelState(e, { sortOrder: t }), h.Z.setSortOrder(t));
            }),
            (this.setLayoutType = (e, t) => {
                (this.setChannelState(e, { layoutType: t }), h.Z.setLayout(t));
            }),
            (this.setTagSetting = (e, t) => {
                (this.setChannelState(e, { tagSetting: t }), h.Z.setTagSetting(t));
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, { scrollPosition: t });
            }));
    }
}
let _ = (0, l.U)((e, t) => new b(e, t)),
    y = (e) => {
        let t = _();
        return null == (0, d.e7)([u.Z], () => u.Z.getChannel(e)) ? m : t.getChannelState(e);
    },
    j = () => _;
