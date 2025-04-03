n.d(t, {
    H: () => j,
    v: () => v
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    o = n(230383),
    a = n(313361),
    s = n(683860),
    l = n(731965),
    c = n(442837),
    u = n(592125),
    d = n(559241);
function h(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let m = new Set(),
    f = {
        layoutType: a.X.LIST,
        sortOrder: s.z.CREATION_DATE,
        tagFilter: m,
        scrollPosition: 0
    };
class g {
    constructor(e, t) {
        h(this, 'set', void 0),
            h(this, 'get', void 0),
            h(this, 'channelStates', void 0),
            h(this, 'setChannelState', void 0),
            h(this, 'getChannelState', void 0),
            h(this, 'toggleTagFilter', void 0),
            h(this, 'setTagFilter', void 0),
            h(this, 'setSortOrder', void 0),
            h(this, 'setLayoutType', void 0),
            h(this, 'setScrollPosition', void 0),
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
                let n = this.get(),
                    i = this.getChannelState(e),
                    r = p({}, n.channelStates);
                (r[e] = p({}, i, t)), (0, l.j)(() => this.set({ channelStates: r }));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return f;
                let { channelStates: t } = this.get(),
                    n = t[e];
                if (null == n) {
                    let t = u.Z.getChannel(e);
                    r()(null != t, '[Forum Channel Store] The channel should not be missing.'),
                        (n = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: m,
                            scrollPosition: 0
                        });
                }
                return n;
            }),
            (this.toggleTagFilter = (e, t) => {
                let n = new Set(this.getChannelState(e).tagFilter);
                n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
            }),
            (this.setTagFilter = (e, t) => {
                this.setChannelState(e, { tagFilter: t }), d.Z.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
                this.setChannelState(e, { sortOrder: t }), d.Z.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
                this.setChannelState(e, { layoutType: t }), d.Z.setLayout(t);
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, { scrollPosition: t });
            });
    }
}
let b = (0, o.U)((e, t) => new g(e, t)),
    j = (e) => {
        let t = b();
        return null == (0, c.e7)([u.Z], () => u.Z.getChannel(e)) ? f : t.getChannelState(e);
    },
    v = () => b;
