n.d(t, {
    A: () => A,
}),
    n(321073),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(442433),
    s = n(686956),
    o = n(366811),
    c = n(383394),
    u = n(458294),
    d = n(71393),
    f = n(403362),
    p = n(842452),
    h = n(305928),
    b = n(652215);

function g(e) {
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
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = l.memo(function (e) {
    let { folderNode: t } = e,
        A = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["folderNode"]),
        { id: y, name: O, color: j, children: v } = t,
        x = v.map((e) => e.id),
        E = (0, o.A)((e) => e.guildId),
        _ = (0, i.bG)([c.A], () => c.A.isFolderExpanded(y)),
        C = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = d.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(f.Vq),
                n = 2 * b.F05,
                r = [];
            for (let e of t) (e.length < n || 0 === r.length) && (r.push(e), (n -= e.length));
            return "".concat(r.join(", ")).concat(r.length < t.length ? ", ..." : "");
        })(t),
        S = (0, h.A)(t),
        {
            mentionCount: I,
            isMentionLowImportance: N,
            unread: T,
        } = (0, i.cf)([u.default], () => ({
            mentionCount: x.map((e) => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: x.every((e) => u.default.getIsMentionLowImportance(e)),
            unread: x.some((e) => u.default.hasUnread(e)),
        })),
        P = l.useCallback(() => {
            s.A.toggleGuildFolderExpand(y);
        }, [y]),
        w = l.useCallback(
            (e) => {
                (0, a.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            m(g({}, t), {
                                folderId: y,
                                folderName: O,
                                folderColor: j,
                                unread: T || I > 0,
                            }),
                        );
                });
            },
            [y, O, j, T, I],
        );
    return (0, r.jsx)(
        p.A,
        m(g({}, A), {
            folderNode: t,
            expanded: _,
            selected: null != E && x.includes(E),
            mentionCount: I,
            isMentionLowImportance: N,
            unread: T,
            mediaState: S,
            defaultFolderName: C,
            onExpandCollapse: P,
            onContextMenu: w,
        }),
    );
});
