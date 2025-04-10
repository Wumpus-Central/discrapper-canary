n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(496675),
    o = n(246364),
    c = n(983736),
    d = n(5056),
    u = n(565321),
    m = n(297619),
    g = n(456935),
    p = n(446945),
    f = n(700833),
    h = n(592286),
    b = n(981631),
    x = n(388032),
    j = n(762956);
let N = function (e) {
    let { guild: t, submittedGuildJoinRequestsCount: n, onFormFieldUpdate: N, hideVerificationLevelField: v, isClanContext: _, formDescription: y, onFieldsSave: O, onDescriptionSave: C } = e,
        I = i.useRef(!1),
        [E, S] = i.useState(null),
        [T, P] = i.useState(e.formFields);
    i.useEffect(() => P(e.formFields), [e.formFields]);
    let w = i.useRef(e.formFields),
        R = i.useMemo(() => T.filter(c.kT), [T]),
        Z = i.useMemo(() => T.filter(c._C), [T]),
        D = Z.length,
        k = i.useMemo(() => T.length === h.nx, [T]),
        W = i.useMemo(() => T.some(o.J), [T]),
        A = i.useMemo(() => T.some((e) => !(0, o.J)(e)), [T]),
        L = D > 0,
        M = t.hasFeature(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || _,
        G = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(x.NW.string(x.t.R0RpRU), a.ToastType.FAILURE));
        }, []),
        U = (0, s.e7)([l.Z], () => l.Z.can(b.Plq.MANAGE_GUILD, t)),
        B = i.useCallback(
            async (e) => {
                if (!I.current) {
                    (I.current = !0), _ && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                    try {
                        await O(t.id, e), N(), P(e), (w.current = e);
                    } catch (e) {
                        throw (P(w.current), e);
                    } finally {
                        null != E && S(null), (I.current = !1);
                    }
                }
            },
            [E, t.id, N, O, _]
        ),
        F = i.useCallback(
            async (e) => {
                let t = e.field_type === o.QJ.TERMS ? [e, ...T] : [...T, e];
                await B(t);
            },
            [T, B]
        ),
        z = i.useCallback(
            async (e, t) => {
                if (T[e] === t) return;
                let n = [...T];
                (n[e] = t), await B(n);
            },
            [T, B]
        ),
        H = i.useCallback(
            async (e, t, n) => {
                let r = T.indexOf(e),
                    i = [...T];
                if ((null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), P(i)), n))
                    try {
                        await B(i), null !== E && S(null);
                    } catch (e) {
                        G();
                    }
                else E !== t && S(t);
            },
            [E, T, B, G]
        ),
        V = i.useCallback(
            async (e) => {
                try {
                    await B([...T.slice(0, e), ...T.slice(e + 1)]);
                } catch (e) {
                    G();
                }
            },
            [T, B, G]
        ),
        Y = U ? (_ ? 'side' : 'footer') : 'none',
        K = (0, r.jsxs)(r.Fragment, {
            children: [
                !v && (0, r.jsx)(g.ZP, { guild: t }),
                (0, r.jsx)(u.Z, {
                    formDescription: y,
                    guildId: t.id,
                    onSave: C,
                    disable: !U
                }),
                U &&
                    !W &&
                    !k &&
                    (0, r.jsx)(m.Z, {
                        addFormField: F,
                        guild: t
                    }),
                R.map((e) =>
                    (0, f.a0)({
                        dropHoveredIndex: E,
                        formField: e,
                        guild: t,
                        index: T.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: n,
                        removeFormField: V,
                        updateFormField: z,
                        updateFormFieldOrder: H,
                        canRemove: !0,
                        actionsLocation: Y,
                        fieldStyle: o.it.REGULAR
                    })
                )
            ]
        });
    return M
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  !_ && K,
                  !A &&
                      (0, r.jsx)(d.Z, {
                          addFormField: F,
                          showManualApprovalWarning: !_ && !L,
                          guild: t,
                          showHeader: !_
                      }),
                  Z.map((e) =>
                      (0, f.a0)({
                          dropHoveredIndex: E,
                          formField: e,
                          guild: t,
                          index: T.indexOf(e),
                          isDragEnabled: L && U,
                          submittedGuildJoinRequestsCount: n,
                          removeFormField: V,
                          updateFormField: z,
                          updateFormFieldOrder: H,
                          canRemove: !(_ && Z.length <= 1) && U,
                          actionsLocation: Y,
                          fieldStyle: o.it.REGULAR
                      })
                  ),
                  A &&
                      !k &&
                      U &&
                      (0, r.jsx)('div', {
                          className: j.addQuestionsContainer,
                          children: (0, r.jsx)(p.Z, {
                              addFormField: F,
                              guild: t
                          })
                      })
              ]
          })
        : K;
};
