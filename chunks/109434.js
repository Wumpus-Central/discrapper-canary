i.d(t, {
    H: () => v,
    v: () => x
}),
    i(47120);
var n = i(512722),
    a = i.n(n),
    o = i(15729),
    s = i(313361),
    l = i(683860),
    r = i(731965),
    c = i(442837),
    d = i(592125),
    u = i(559241);
function h(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let m = new Set(),
    p = {
        layoutType: s.X.LIST,
        sortOrder: l.z.CREATION_DATE,
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
                let i = this.get(),
                    n = this.getChannelState(e),
                    a = { ...i.channelStates };
                (a[e] = {
                    ...n,
                    ...t
                }),
                    (0, r.j)(() => this.set({ channelStates: a }));
            }),
            (this.getChannelState = (e) => {
                if (null == e) return p;
                let { channelStates: t } = this.get(),
                    i = t[e];
                if (null == i) {
                    let t = d.Z.getChannel(e);
                    a()(null != t, '[Forum Channel Store] The channel should not be missing.'),
                        (i = {
                            layoutType: t.getDefaultLayout(),
                            sortOrder: t.getDefaultSortOrder(),
                            tagFilter: m,
                            scrollPosition: 0
                        });
                }
                return i;
            }),
            (this.toggleTagFilter = (e, t) => {
                let i = new Set(this.getChannelState(e).tagFilter);
                i.has(t) ? i.delete(t) : i.add(t), this.setTagFilter(e, i);
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
let f = (0, o.U)((e, t) => new g(e, t)),
    v = (e) => {
        let t = f();
        return null == (0, c.e7)([d.Z], () => d.Z.getChannel(e)) ? p : t.getChannelState(e);
    },
    x = () => f;
