"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(741918),
    c = n(311907),
    u = n(73153),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    p = n(260762),
    f = n(861382),
    g = n(522602),
    _ = n(234320),
    x = n(349688),
    A = n(839914),
    C = n(914905),
    E = n(652215),
    I = n(386016),
    v = n(429128);
let y = [];
function S(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: S = !1 } = e,
        b = (0, c.bG)([m.A], () => m.A.keyboardModeEnabled),
        N = (0, p.A)("attachments", o.Gl.HORIZONTAL),
        T = (0, c.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: j,
            commandOptions: R,
            commandOptionStates: w,
        } = (0, c.cf)([f.A], () => {
            let e = f.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: y, commandOptionStates: null };
            let n = f.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        L = l.useMemo(() => R?.filter((e) => e.type === h.n4.ATTACHMENT && w?.[e.name]?.hasValue) ?? [], [R, w]),
        [M, k] = l.useState([]);
    l.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            u.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => u.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let O = l.useCallback(() => {
        N.focusFirstVisibleItem();
    }, [N]);
    (0, _.Vo)({ event: E.jej.FOCUS_ATTACHMENT_AREA, handler: O });
    let P = { isApplicationCommand: j, previousUploadOptions: M, uploadOptions: L },
        D = l.useRef(P);
    l.useEffect(() => {
        D.current = P;
    }),
        l.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: l } = D.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    l.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    k(l);
            }
        }, [t, L.length, n]);
    let U = T.filter((e) => e.filename !== s);
    return (!j && 0 === U.length) || (j && 0 === L.length)
        ? null
        : (0, i.jsx)(a.hD, {
              navigator: N,
              children: (0, i.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: l, ...s } = e;
                      return (0, i.jsx)("ul", {
                          ref: l,
                          ...s,
                          className: r()(I.I, v.KK),
                          children: j
                              ? L.map((e) =>
                                    (0, i.jsx)(A.A, { channelId: t, keyboardModeEnabled: b, option: e }, e.name),
                                )
                              : U.map((e) =>
                                    (0, i.jsx)(
                                        C.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: b,
                                            clip: e.clip,
                                            size: S ? x.L.SMALL : x.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let b = l.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: l, ignoreFile: s, smallAttachments: r = !1 } = e;
    return l ? (0, i.jsx)(S, { channelId: t, type: n, ignoreFile: s, smallAttachments: r }) : null;
});
