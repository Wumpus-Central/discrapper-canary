n.d(t, { R: () => p, p: () => f });
var i = n(284009),
    l = n.n(i),
    s = n(353640),
    r = n(371444),
    a = n(392421),
    o = n(602137),
    d = n(121894),
    c = n(17928),
    u = n(734057),
    h = n(679804);
let A = new Set(),
    _ = { layoutType: r.C.LIST, sortOrder: o.T.CREATION_DATE, tagFilter: A, tagSetting: a.n.MATCH_SOME };
class g {
    set;
    get;
    channelStates = {};
    constructor(e, t) {
        (this.set = e), (this.get = t);
    }
    setChannelState = (e, t) => {
        let n = this.get(),
            i = this.getChannelState(e),
            l = { ...n.channelStates };
        (l[e] = { ...i, ...t }), (0, d.r)(() => this.set({ channelStates: l }));
    };
    getChannelState = (e) => {
        if (null == e) return _;
        let { channelStates: t } = this.get(),
            n = t[e];
        if (null == n) {
            let t = u.A.getChannel(e);
            l()(null != t, "[Forum Channel Store] The channel should not be missing."),
                (n = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: A,
                    tagSetting: t.getDefaultTagSetting(),
                });
        }
        return n;
    };
    toggleTagFilter = (e, t) => {
        let n = new Set(this.getChannelState(e).tagFilter);
        n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
    };
    setTagFilter = (e, t) => {
        this.setChannelState(e, { tagFilter: t }), h.A.setFilterTagIds(t);
    };
    setSortOrder = (e, t) => {
        this.setChannelState(e, { sortOrder: t }), h.A.setSortOrder(t);
    };
    setLayoutType = (e, t) => {
        this.setChannelState(e, { layoutType: t }), h.A.setLayout(t);
    };
    setTagSetting = (e, t) => {
        this.setChannelState(e, { tagSetting: t }), h.A.setTagSetting(t);
    };
}
let m = (0, s.v)((e, t) => new g(e, t)),
    p = (e) => {
        let t = m();
        return null == (0, c.bG)([u.A], () => u.A.getChannel(e)) ? _ : t.getChannelState(e);
    },
    f = () => m;
