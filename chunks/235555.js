n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(239091),
    c = n(476669),
    d = n(524331),
    u = n(768419),
    h = n(831506),
    m = n(699516),
    p = n(594174),
    g = n(823379),
    f = n(824138),
    _ = n(388032);
function E(e, t, n) {
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
class I extends r.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, d.Z)();
    }
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, i.jsx)(f.Z, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleUserContextMenu', (e, t) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: t
                        });
                });
            }),
            E(this, 'renderOverflowPopout', () => {
                let { party: e } = this.props;
                return (0, i.jsx)(c.Z, {
                    party: e,
                    header: _.intl.formatToPlainString(_.t.I9et19, { count: e.length })
                });
            });
    }
}
t.Z = s.ZP.connectStores([u.Z, p.default, m.Z, h.Z], () => {
    let e, t;
    let n = u.Z.getSyncingWith(),
        i = u.Z.getActivity(),
        r = p.default.getCurrentUser(),
        l = [];
    if ((null != n ? ((e = p.default.getUser(n.userId)), (t = n.partyId)) : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)), null != t)) {
        var s;
        l = a()(Array.from(null !== (s = h.Z.getParty(t)) && void 0 !== s ? s : []))
            .map((e) => p.default.getUser(e))
            .filter(g.lm)
            .orderBy([(t) => null == e || e.id === t.id, (e) => m.Z.isFriend(e.id)], ['desc', 'desc'])
            .value();
    }
    return {
        currentUser: r,
        host: e,
        party: l
    };
})(I);
