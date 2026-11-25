(n.d(t, { A: () => L }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(741918),
    u = n(855986),
    c = n(73153),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    f = n(260762),
    p = n(861382),
    g = n(522602),
    x = n(234320),
    E = n(198554),
    y = n(834730),
    S = n(939249),
    A = n(307955),
    C = n(424170),
    I = n(274652),
    b = n(31717),
    v = n(914905),
    N = n(650583),
    j = n(792996),
    k = n(40974);
function T(e) {
    let { channelId: t, option: n, keyboardModeEnabled: r } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, b.C.SlashCommand),
        m = i.useRef(null),
        f = n.type === h.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: p,
            typesFormattedString: x,
            validateFilenames: T,
            showInvalidFileTypeAlert: _,
        } = (0, C.M1)(f),
        O = i.useCallback(() => {
            u(!0);
        }, []),
        R = i.useCallback(() => {
            u(!1);
        }, []),
        w = i.useCallback(
            (e, l) => {
                if (p.length > 0 && !T([e.name])) return _();
                let i = { id: n.name, file: e, platform: I.x.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: b.C.SlashCommand, allowOptimization: !1 });
            },
            [p.length, T, n.name, t, _],
        ),
        M = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && w(t, "drag_drop");
            },
            [w],
        );
    return (i.useEffect(() => {
        let e = m.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", O, !1),
                e?.addEventListener("dragleave", R, !1),
                e?.addEventListener("drop", M, !1)),
            () => {
                (e?.removeEventListener("dragover", O, !1),
                    e?.removeEventListener("dragleave", R, !1),
                    e?.removeEventListener("drop", M, !1));
            }
        );
    }, [c, O, R, M]),
    null != c)
        ? (0, l.jsx)(v.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: r,
              draftType: b.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(y.E, { tag: "span", variant: "body-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(y.E, {
                          tag: "span",
                          variant: "body-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(E.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: r,
              onKeyDown: function (e) {
                  e.key === N.dh.ENTER && (e.preventDefault(), a.current?.activateUploadDialogue());
              },
              className: s()(k.xd, { [k.LB]: o }),
              draftType: b.C.SlashCommand,
              ref: m,
              children: [
                  (0, l.jsx)("span", { className: s()(k.fS, { [k.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(S.D, {
                      className: k.uN,
                      onClick: () => a.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: k.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: k.H9, alt: "" }),
                              (0, l.jsx)(y.E, {
                                  className: k.L,
                                  variant: "body-sm/normal",
                                  children:
                                      null != x ? j.intl.format(j.t.JJzx48, { types: x }) : j.intl.string(j.t.IJyOUf),
                              }),
                              (0, l.jsx)(A.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (w(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: k.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var _ = n(652215),
    O = n(714731),
    R = n(969490);
let w = [];
function M(e) {
    let { channelId: t, type: n, ignoreUploadId: r, smallAttachments: y = !1 } = e,
        S = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
        A = (0, f.A)("attachments", o.Gl.HORIZONTAL),
        C = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: I,
            commandOptions: b,
            commandOptionStates: N,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: w, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        j = i.useMemo(() => b?.filter((e) => e.type === h.n4.ATTACHMENT && N?.[e.name]?.hasValue) ?? [], [b, N]),
        [k, M] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let L = i.useCallback(() => {
        A.focusFirstVisibleItem();
    }, [A]);
    (0, x.Vo)({ event: _.jej.FOCUS_ATTACHMENT_AREA, handler: L });
    let P = { isApplicationCommand: I, previousUploadOptions: k, uploadOptions: j },
        D = i.useRef(P);
    (i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                (l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    M(i));
            }
        }, [t, j.length, n]));
    let U = C.filter((e) => e.id !== r);
    return (!I && 0 === U.length) || (I && 0 === j.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: A,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...r } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...r,
                          className: s()(O.I, R.KK),
                          children: I
                              ? j.map((e) => (0, l.jsx)(T, { channelId: t, keyboardModeEnabled: S, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        v.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: S,
                                            clip: e.clip,
                                            size: y ? E.L.SMALL : E.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let L = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreUploadId: r, smallAttachments: s = !1 } = e;
    return i ? (0, l.jsx)(M, { channelId: t, type: n, ignoreUploadId: r, smallAttachments: s }) : null;
});
