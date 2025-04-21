n.d(t, { default: () => p });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(239091),
    a = n(749210),
    d = n(664915),
    s = n(771845),
    c = n(181945),
    u = n(945983),
    b = n(981631),
    f = n(388032);
function p(e) {
    var t;
    let { folderId: p, folderName: j, folderColor: g, unread: m, onSelect: O } = e,
        h = (0, l.e7)([s.ZP], () => s.ZP.getGuildFolderById(p), [p]),
        y = (0, u.Z)(null != (t = null == h ? void 0 : h.guildIds) ? t : []),
        k = (0, l.e7)([d.Z], () => d.Z.getExpandedFolders().size > 0);
    return (0, r.jsxs)(i.v2r, {
        navId: 'guild-context',
        'aria-label': f.intl.string(f.t.HpQykZ),
        onClose: o.Zy,
        onSelect: O,
        children: [
            (0, r.jsx)(i.kSQ, {
                children: (0, r.jsx)(i.sNh, {
                    id: 'mark-folder-read',
                    label: f.intl.string(f.t.thzRJC),
                    action: function () {
                        if (null == h) return;
                        let { guildIds: e } = h;
                        (0, c.Z)(e, b.jXE.GUILD_LIST);
                    },
                    disabled: !m
                })
            }),
            null != y ? (0, r.jsx)(i.kSQ, { children: y }) : null,
            (0, r.jsxs)(i.kSQ, {
                children: [
                    (0, r.jsx)(i.sNh, {
                        id: 'folder-settings',
                        label: f.intl.string(f.t.Dx7im5),
                        action: () =>
                            (0, i.ZDy)(async () => {
                                let { default: e } = await n.e('66915').then(n.bind(n, 662708));
                                return (t) => {
                                    var n, l;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = (function (e) {
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
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, t)),
                                        (l = l =
                                            {
                                                folderId: p,
                                                folderName: j,
                                                folderColor: g
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
                                        n)
                                    );
                                };
                            })
                    }),
                    k &&
                        (0, r.jsx)(i.sNh, {
                            id: 'folder-collapse',
                            label: f.intl.string(f.t.rCPsbm),
                            action: () => a.Z.collapseAllFolders()
                        })
                ]
            })
        ]
    });
}
