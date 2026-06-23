n.d(e, { R: () => p, p: () => A });
var a = n(284009),
    s = n.n(a),
    l = n(353640),
    r = n(371444),
    h = n(392421),
    i = n(602137),
    g = n(121894),
    u = n(17928),
    S = n(734057),
    o = n(679804);
let C = new Set(),
    T = { layoutType: r.C.LIST, sortOrder: i.T.CREATION_DATE, tagFilter: C, tagSetting: h.n.MATCH_SOME };
class d {
    set;
    get;
    channelStates = {};
    constructor(t, e) {
        (this.set = t), (this.get = e);
    }
    setChannelState = (t, e) => {
        let n = this.get(),
            a = this.getChannelState(t),
            s = { ...n.channelStates };
        (s[t] = { ...a, ...e }), (0, g.r)(() => this.set({ channelStates: s }));
    };
    getChannelState = (t) => {
        if (null == t) return T;
        let { channelStates: e } = this.get(),
            n = e[t];
        if (null == n) {
            let e = S.A.getChannel(t);
            s()(null != e, "[Forum Channel Store] The channel should not be missing."),
                (n = {
                    layoutType: e.getDefaultLayout(),
                    sortOrder: e.getDefaultSortOrder(),
                    tagFilter: C,
                    tagSetting: e.getDefaultTagSetting(),
                });
        }
        return n;
    };
    toggleTagFilter = (t, e) => {
        let n = new Set(this.getChannelState(t).tagFilter);
        n.has(e) ? n.delete(e) : n.add(e), this.setTagFilter(t, n);
    };
    setTagFilter = (t, e) => {
        this.setChannelState(t, { tagFilter: e }), o.A.setFilterTagIds(e);
    };
    setSortOrder = (t, e) => {
        this.setChannelState(t, { sortOrder: e }), o.A.setSortOrder(e);
    };
    setLayoutType = (t, e) => {
        this.setChannelState(t, { layoutType: e }), o.A.setLayout(e);
    };
    setTagSetting = (t, e) => {
        this.setChannelState(t, { tagSetting: e }), o.A.setTagSetting(e);
    };
}
let c = (0, l.v)((t, e) => new d(t, e));
function p(t) {
    let e = c();
    return null == (0, u.bG)([S.A], () => S.A.getChannel(t)) ? T : e.getChannelState(t);
}
function A() {
    return c;
}
