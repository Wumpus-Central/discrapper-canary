n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(239091),
    c = n(476669),
    u = n(524331),
    d = n(768419),
    p = n(831506),
    h = n(699516),
    f = n(594174),
    g = n(823379),
    m = n(824138),
    b = n(388032);
function _(e, t, n) {
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
class E extends i.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, u.Z)();
    }
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, r.jsx)(m.Z, {
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
            _(this, 'handleUserContextMenu', (e, t) => {
                (0, s.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            _(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { user: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                });
            }),
            _(this, 'renderOverflowPopout', () => {
                let { party: e } = this.props;
                return (0, r.jsx)(c.Z, {
                    party: e,
                    header: b.NW.formatToPlainString(b.t.I9et19, { count: e.length })
                });
            });
    }
}
let O = o.ZP.connectStores([d.Z, f.default, h.Z, p.Z], () => {
    let e,
        t,
        n = d.Z.getSyncingWith(),
        r = d.Z.getActivity(),
        i = f.default.getCurrentUser(),
        l = [];
    if ((null != n ? ((e = f.default.getUser(n.userId)), (t = n.partyId)) : null != r && null != r.party && null != r.party.id && ((e = i), (t = r.party.id)), null != t)) {
        var o;
        l = a()(Array.from(null != (o = p.Z.getParty(t)) ? o : []))
            .map((e) => f.default.getUser(e))
            .filter(g.lm)
            .orderBy([(t) => null == e || e.id === t.id, (e) => h.Z.isFriend(e.id)], ['desc', 'desc'])
            .value();
    }
    return {
        currentUser: i,
        host: e,
        party: l
    };
})(E);
