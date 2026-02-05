n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(311907),
    o = n(442433),
    d = n(504337),
    c = n(655116),
    u = n(629016),
    A = n(994500),
    h = n(287809),
    _ = n(403362),
    m = n(901133),
    p = n(507133),
    g = n(985018);
class E extends r.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, d.A)();
    }
    handleUserContextMenu = (e, t) => {
        (0, o.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
            return (n) => (0, i.jsx)(e, { ...n, user: t });
        });
    };
    renderOverflowPopout = () => {
        let { party: e } = this.props;
        return (0, i.jsx)(p.A, { party: e, header: g.intl.formatToPlainString(g.t.I9et1z, { count: e.length }) });
    };
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, i.jsx)(m.A, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu,
              })
            : null;
    }
}
let f = s.Ay.connectStores([c.A, h.default, A.A, u.A], () => {
    let e,
        t,
        n = c.A.getSyncingWith(),
        i = c.A.getActivity(),
        r = h.default.getCurrentUser(),
        a = [];
    return (
        null != n
            ? ((e = h.default.getUser(n.userId)), (t = n.partyId))
            : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)),
        null != t &&
            (a = l()(Array.from(u.A.getParty(t) ?? []))
                .map((e) => h.default.getUser(e))
                .filter(_.Vq)
                .orderBy([(t) => null == e || e.id === t.id, (e) => A.A.isFriend(e.id)], ["desc", "desc"])
                .value()),
        { currentUser: r, host: e, party: a }
    );
})(E);
