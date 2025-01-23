n.d(t, {
    H: function () {
        return v;
    },
    v: function () {
        return b;
    }
}),
    n(47120);
var i = n(512722),
    o = n.n(i),
    a = n(15729),
    l = n(313361),
    s = n(683860),
    r = n(731965),
    c = n(442837),
    d = n(592125),
    u = n(559241);
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
let m = new Set(),
    p = {
        layoutType: l.X.LIST,
        sortOrder: s.z.CREATION_DATE,
        tagFilter: m,
        scrollPosition: 0
    };
class f {
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
                    o = { ...n.channelStates };
                (o[e] = {
                    ...i,
                    ...t
                }),
                    (0, r.j)(() => this.set({ channelStates: o }));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return p;
                let { channelStates: t } = this.get(),
                    n = t[e];
                if (null == n) {
                    let t = d.Z.getChannel(e);
                    o()(null != t, '[Forum Channel Store] The channel should not be missing.'),
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
                this.setChannelState(e, { tagFilter: t }), u.Z.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
                this.setChannelState(e, { sortOrder: t }), u.Z.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
                this.setChannelState(e, { layoutType: t }), u.Z.setLayout(t);
            }),
            (this.setScrollPosition = (e, t) => {
                this.setChannelState(e, { scrollPosition: t });
            });
    }
}
let g = (0, a.U)((e, t) => new f(e, t)),
    v = (e) => {
        let t = g();
        return null == (0, c.e7)([d.Z], () => d.Z.getChannel(e)) ? p : t.getChannelState(e);
    },
    b = () => g;
