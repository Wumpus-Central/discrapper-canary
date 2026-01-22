n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    o = n(442433),
    c = n(504337),
    u = n(655116),
    d = n(629016),
    p = n(994500),
    f = n(287809),
    h = n(403362),
    A = n(901133),
    g = n(507133),
    m = n(985018);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class _ extends i.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, c.A)();
    }
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, r.jsx)(A.A, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu,
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            b(this, "handleUserContextMenu", (e, t) => {
                (0, o.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            b(e, t, n[t]);
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
                            i),
                        );
                    };
                });
            }),
            b(this, "renderOverflowPopout", () => {
                let { party: e } = this.props;
                return (0, r.jsx)(g.A, {
                    party: e,
                    header: m.intl.formatToPlainString(m.t.I9et1z, { count: e.length }),
                });
            });
    }
}
let E = s.Ay.connectStores([u.A, f.default, p.A, d.A], () => {
    let e,
        t,
        n = u.A.getSyncingWith(),
        r = u.A.getActivity(),
        i = f.default.getCurrentUser(),
        l = [];
    if (
        (null != n
            ? ((e = f.default.getUser(n.userId)), (t = n.partyId))
            : null != r && null != r.party && null != r.party.id && ((e = i), (t = r.party.id)),
        null != t)
    ) {
        var s;
        l = a()(Array.from(null != (s = d.A.getParty(t)) ? s : []))
            .map((e) => f.default.getUser(e))
            .filter(h.Vq)
            .orderBy([(t) => null == e || e.id === t.id, (e) => p.A.isFriend(e.id)], ["desc", "desc"])
            .value();
    }
    return {
        currentUser: i,
        host: e,
        party: l,
    };
})(_);
