n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    c = n(481060),
    s = n(496675),
    a = n(246364),
    l = n(983736),
    u = n(5056),
    d = n(565321),
    f = n(297619),
    p = n(456935),
    b = n(446945),
    j = n(700833),
    y = n(592286),
    m = n(981631),
    g = n(388032),
    O = n(762956);
let h = function (e) {
    let { guild: t, submittedGuildJoinRequestsCount: n, onFormFieldUpdate: h, hideVerificationLevelField: v, isClanContext: x, formDescription: P, onFieldsSave: w, onDescriptionSave: N } = e,
        C = i.useRef(!1),
        [E, S] = i.useState(null),
        [D, R] = i.useState(e.formFields);
    i.useEffect(() => R(e.formFields), [e.formFields]);
    let k = i.useRef(e.formFields),
        T = i.useMemo(() => D.filter(l.kT), [D]),
        F = i.useMemo(() => D.filter(l._C), [D]),
        I = F.length,
        Z = i.useMemo(() => D.length === y.nx, [D]),
        A = i.useMemo(() => D.some(a.J), [D]),
        W = i.useMemo(() => D.some((e) => !(0, a.J)(e)), [D]),
        M = I > 0,
        L = t.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || x,
        _ = i.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(g.NW.string(g.t.R0RpRU), c.ToastType.FAILURE));
        }, []),
        H = (0, o.e7)([s.Z], () => s.Z.can(m.Plq.MANAGE_GUILD, t)),
        J = i.useCallback(
            async (e) => {
                if (!C.current) {
                    (C.current = !0), x && (e = e.filter((e) => e.field_type !== a.QJ.TERMS));
                    try {
                        await w(t.id, e), h(), R(e), (k.current = e);
                    } catch (e) {
                        throw (R(k.current), e);
                    } finally {
                        null != E && S(null), (C.current = !1);
                    }
                }
            },
            [E, t.id, h, w, x]
        ),
        Q = i.useCallback(
            async (e) => {
                let t = e.field_type === a.QJ.TERMS ? [e, ...D] : [...D, e];
                await J(t);
            },
            [D, J]
        ),
        G = i.useCallback(
            async (e, t) => {
                if (D[e] === t) return;
                let n = [...D];
                (n[e] = t), await J(n);
            },
            [D, J]
        ),
        z = i.useCallback(
            async (e, t, n) => {
                let r = D.indexOf(e),
                    i = [...D];
                if ((null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), R(i)), n))
                    try {
                        await J(i), null !== E && S(null);
                    } catch (e) {
                        _();
                    }
                else E !== t && S(t);
            },
            [E, D, J, _]
        ),
        U = i.useCallback(
            async (e) => {
                try {
                    await J([...D.slice(0, e), ...D.slice(e + 1)]);
                } catch (e) {
                    _();
                }
            },
            [D, J, _]
        ),
        B = H ? (x ? 'side' : 'footer') : 'none',
        X = (0, r.jsxs)(r.Fragment, {
            children: [
                !v && (0, r.jsx)(p.ZP, { guild: t }),
                (0, r.jsx)(d.Z, {
                    formDescription: P,
                    guildId: t.id,
                    onSave: N,
                    disable: !H
                }),
                H &&
                    !A &&
                    !Z &&
                    (0, r.jsx)(f.Z, {
                        addFormField: Q,
                        guild: t
                    }),
                T.map((e) =>
                    (0, j.a0)({
                        dropHoveredIndex: E,
                        formField: e,
                        guild: t,
                        index: D.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: n,
                        removeFormField: U,
                        updateFormField: G,
                        updateFormFieldOrder: z,
                        canRemove: !0,
                        actionsLocation: B,
                        fieldStyle: a.it.REGULAR
                    })
                )
            ]
        });
    return L
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  !x && X,
                  !W &&
                      (0, r.jsx)(u.Z, {
                          addFormField: Q,
                          showManualApprovalWarning: !x && !M,
                          guild: t,
                          showHeader: !x
                      }),
                  F.map((e) =>
                      (0, j.a0)({
                          dropHoveredIndex: E,
                          formField: e,
                          guild: t,
                          index: D.indexOf(e),
                          isDragEnabled: M && H,
                          submittedGuildJoinRequestsCount: n,
                          removeFormField: U,
                          updateFormField: G,
                          updateFormFieldOrder: z,
                          canRemove: !(x && F.length <= 1) && H,
                          actionsLocation: B,
                          fieldStyle: a.it.REGULAR
                      })
                  ),
                  W &&
                      !Z &&
                      H &&
                      (0, r.jsx)('div', {
                          className: O.addQuestionsContainer,
                          children: (0, r.jsx)(b.Z, {
                              addFormField: Q,
                              guild: t
                          })
                      })
              ]
          })
        : X;
};
