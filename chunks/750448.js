n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(173860),
    s = n(383394),
    o = n(458294),
    c = n(131677),
    u = n(711014),
    d = n(871697),
    f = n(531685),
    p = n(583613),
    h = n(652215),
    b = n(985018);
let g = "app-download-item",
    m = "add-server-item";

function A() {
    return !1;
}

function y(e) {
    var t;
    let n = o.default.getMutableGuildStates();
    return (
        (e === h.sFm.SERVER_DISCOVERY_BADGE && !d.A.hasViewed(h.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== g && e !== m && (null == (t = n[null != e ? e : "null"]) ? void 0 : t.highImportanceMentionCount) > 0)
    );
}
let O = (0, p.L_)((e, t, n) => ["null", ...t, ...e, m, h.sFm.E3_SERVER_DISCOVERY_BADGE, g]),
    j = l.forwardRef(function (e, t) {
        var n, l;
        let d = (0, i.yK)([u.Ay, c.A, o.default], () =>
                O(u.Ay.getGuildFolders(), c.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel()),
            ),
            p = (0, i.bG)([f.A], () => f.A.isFocused()),
            h = (0, i.bG)([s.A], () => s.A.getExpandedFolders());
        return (0, r.jsx)(
            a.A,
            ((n = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (l = l =
                {
                    ref: t,
                    items: d,
                    isUnread: A,
                    textUnread: b.intl.string(b.t.y2b7CA),
                    textMention: b.intl.string(b.t.y2b7CA),
                    isMentioned: y,
                    animate: p,
                    expandedFolders: h,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            n),
        );
    });
