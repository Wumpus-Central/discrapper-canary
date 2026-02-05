s.d(t, { R: () => f, p: () => p });
var n = s(284009),
    l = s.n(n),
    a = s(353640),
    i = s(371444),
    r = s(392421),
    o = s(602137),
    d = s(121894),
    c = s(311907),
    u = s(734057),
    h = s(679804);
let m = new Set(),
    g = {
        layoutType: i.C.LIST,
        sortOrder: o.T.CREATION_DATE,
        tagFilter: m,
        scrollPosition: 0,
        tagSetting: r.n.MATCH_SOME,
    };
class x {
    set;
    get;
    channelStates = {};
    constructor(e, t) {
        (this.set = e), (this.get = t);
    }
    setChannelState = (e, t) => {
        let s = this.get(),
            n = this.getChannelState(e),
            l = { ...s.channelStates };
        (l[e] = { ...n, ...t }), (0, d.r)(() => this.set({ channelStates: l }));
    };
    getChannelState = (e) => {
        if (null == e) return g;
        let { channelStates: t } = this.get(),
            s = t[e];
        if (null == s) {
            let t = u.A.getChannel(e);
            l()(null != t, "[Forum Channel Store] The channel should not be missing."),
                (s = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: m,
                    scrollPosition: 0,
                    tagSetting: t.getDefaultTagSetting(),
                });
        }
        return s;
    };
    toggleTagFilter = (e, t) => {
        let s = new Set(this.getChannelState(e).tagFilter);
        s.has(t) ? s.delete(t) : s.add(t), this.setTagFilter(e, s);
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
    setScrollPosition = (e, t) => {
        this.setChannelState(e, { scrollPosition: t });
    };
}
let A = (0, a.v)((e, t) => new x(e, t)),
    f = (e) => {
        let t = A();
        return null == (0, c.bG)([u.A], () => u.A.getChannel(e)) ? g : t.getChannelState(e);
    },
    p = () => A;
