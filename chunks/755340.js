t.d(n, { Z: () => p }), t(47120);
var i = t(200651),
    l = t(192379),
    s = t(442837),
    a = t(481060),
    r = t(496675),
    o = t(246364),
    c = t(983736),
    d = t(5056),
    u = t(565321),
    x = t(297619),
    m = t(456935),
    h = t(446945),
    f = t(700833),
    v = t(592286),
    g = t(981631),
    j = t(388032),
    C = t(355772);
let p = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: p, hideVerificationLevelField: N, isClanContext: R, formDescription: y, onFieldsSave: w, onDescriptionSave: E } = e,
        T = l.useRef(!1),
        [F, b] = l.useState(null),
        [Z, I] = l.useState(e.formFields);
    l.useEffect(() => I(e.formFields), [e.formFields]);
    let P = l.useRef(e.formFields),
        k = l.useMemo(() => Z.filter(c.kT), [Z]),
        A = l.useMemo(() => Z.filter(c._C), [Z]),
        S = A.length,
        M = l.useMemo(() => Z.length === v.nx, [Z]),
        D = l.useMemo(() => Z.some(o.J), [Z]),
        L = l.useMemo(() => Z.some((e) => !(0, o.J)(e)), [Z]),
        _ = S > 0,
        H = n.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || R,
        J = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(j.intl.string(j.t.R0RpRU), a.ToastType.FAILURE));
        }, []),
        Q = (0, s.e7)([r.Z], () => r.Z.can(g.Plq.MANAGE_GUILD, n)),
        G = l.useCallback(
            async (e) => {
                if (!T.current) {
                    (T.current = !0), R && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                    try {
                        await w(n.id, e), p(), I(e), (P.current = e);
                    } catch (e) {
                        throw (I(P.current), e);
                    } finally {
                        null != F && b(null), (T.current = !1);
                    }
                }
            },
            [F, n.id, p, w, R]
        ),
        z = l.useCallback(
            async (e) => {
                let n = e.field_type === o.QJ.TERMS ? [e, ...Z] : [...Z, e];
                await G(n);
            },
            [Z, G]
        ),
        O = l.useCallback(
            async (e, n) => {
                if (Z[e] === n) return;
                let t = [...Z];
                (t[e] = n), await G(t);
            },
            [Z, G]
        ),
        U = l.useCallback(
            async (e, n, t) => {
                let i = Z.indexOf(e),
                    l = [...Z];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), I(l)), t))
                    try {
                        await G(l), null !== F && b(null);
                    } catch (e) {
                        J();
                    }
                else F !== n && b(n);
            },
            [F, Z, G, J]
        ),
        B = l.useCallback(
            async (e) => {
                try {
                    await G([...Z.slice(0, e), ...Z.slice(e + 1)]);
                } catch (e) {
                    J();
                }
            },
            [Z, G, J]
        ),
        X = Q ? (R ? 'side' : 'footer') : 'none',
        q = (0, i.jsxs)(i.Fragment, {
            children: [
                !N && (0, i.jsx)(m.ZP, { guild: n }),
                (0, i.jsx)(u.Z, {
                    formDescription: y,
                    guildId: n.id,
                    onSave: E,
                    disable: !Q
                }),
                Q &&
                    !D &&
                    !M &&
                    (0, i.jsx)(x.Z, {
                        addFormField: z,
                        guild: n
                    }),
                k.map((e) =>
                    (0, f.a0)({
                        dropHoveredIndex: F,
                        formField: e,
                        guild: n,
                        index: Z.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: B,
                        updateFormField: O,
                        updateFormFieldOrder: U,
                        canRemove: !0,
                        actionsLocation: X,
                        fieldStyle: o.it.REGULAR
                    })
                )
            ]
        });
    return H
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !R && q,
                  !L &&
                      (0, i.jsx)(d.Z, {
                          addFormField: z,
                          showManualApprovalWarning: !R && !_,
                          guild: n,
                          showHeader: !R
                      }),
                  A.map((e) =>
                      (0, f.a0)({
                          dropHoveredIndex: F,
                          formField: e,
                          guild: n,
                          index: Z.indexOf(e),
                          isDragEnabled: _ && Q,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: B,
                          updateFormField: O,
                          updateFormFieldOrder: U,
                          canRemove: !(R && A.length <= 1) && Q,
                          actionsLocation: X,
                          fieldStyle: o.it.REGULAR
                      })
                  ),
                  L &&
                      !M &&
                      Q &&
                      (0, i.jsx)('div', {
                          className: C.addQuestionsContainer,
                          children: (0, i.jsx)(h.Z, {
                              addFormField: z,
                              guild: n
                          })
                      })
              ]
          })
        : q;
};
