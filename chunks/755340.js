t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    r = t(496675),
    o = t(246364),
    c = t(983736),
    d = t(5056),
    u = t(565321),
    m = t(297619),
    x = t(456935),
    f = t(446945),
    h = t(700833),
    g = t(592286),
    v = t(981631),
    C = t(388032),
    j = t(491490);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: p, hideVerificationLevelField: T, isClanContext: N, formDescription: I, onFieldsSave: y, onDescriptionSave: R } = e,
        F = l.useRef(!1),
        [E, b] = l.useState(null),
        [w, M] = l.useState(e.formFields);
    l.useEffect(() => M(e.formFields), [e.formFields]);
    let k = l.useRef(e.formFields),
        L = l.useMemo(() => w.filter(c.kT), [w]),
        P = l.useMemo(() => w.filter(c._C), [w]),
        S = P.length,
        A = l.useMemo(() => w.length === g.nx, [w]),
        Z = l.useMemo(() => w.some(o.J), [w]),
        _ = l.useMemo(() => w.some((e) => !(0, o.J)(e)), [w]),
        H = S > 0,
        J = n.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || N,
        D = l.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.R0RpRU), s.ToastType.FAILURE));
        }, []),
        B = (0, a.e7)([r.Z], () => r.Z.can(v.Plq.MANAGE_GUILD, n)),
        z = l.useCallback(
            async (e) => {
                if (!F.current) {
                    (F.current = !0), N && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                    try {
                        await y(n.id, e), p(), M(e), (k.current = e);
                    } catch (e) {
                        throw (M(k.current), e);
                    } finally {
                        null != E && b(null), (F.current = !1);
                    }
                }
            },
            [E, n.id, p, y, N]
        ),
        Q = l.useCallback(
            async (e) => {
                let n = e.field_type === o.QJ.TERMS ? [e, ...w] : [...w, e];
                await z(n);
            },
            [w, z]
        ),
        G = l.useCallback(
            async (e, n) => {
                if (w[e] === n) return;
                let t = [...w];
                (t[e] = n), await z(t);
            },
            [w, z]
        ),
        U = l.useCallback(
            async (e, n, t) => {
                let i = w.indexOf(e),
                    l = [...w];
                if ((null != n && n !== i && (l.splice(i, 1), l.splice(n, 0, e), M(l)), t))
                    try {
                        await z(l), null !== E && b(null);
                    } catch (e) {
                        D();
                    }
                else E !== n && b(n);
            },
            [E, w, z, D]
        ),
        O = l.useCallback(
            async (e) => {
                try {
                    await z([...w.slice(0, e), ...w.slice(e + 1)]);
                } catch (e) {
                    D();
                }
            },
            [w, z, D]
        ),
        q = B ? (N ? 'side' : 'footer') : 'none',
        V = (0, i.jsxs)(i.Fragment, {
            children: [
                !T && (0, i.jsx)(x.ZP, { guild: n }),
                (0, i.jsx)(u.Z, {
                    formDescription: I,
                    guildId: n.id,
                    onSave: R,
                    disable: !B
                }),
                B &&
                    !Z &&
                    !A &&
                    (0, i.jsx)(m.Z, {
                        addFormField: Q,
                        guild: n
                    }),
                L.map((e) =>
                    (0, h.a0)({
                        dropHoveredIndex: E,
                        formField: e,
                        guild: n,
                        index: w.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: O,
                        updateFormField: G,
                        updateFormFieldOrder: U,
                        canRemove: !0,
                        actionsLocation: q,
                        fieldStyle: o.it.REGULAR
                    })
                )
            ]
        });
    return J
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !N && V,
                  !_ &&
                      (0, i.jsx)(d.Z, {
                          addFormField: Q,
                          showManualApprovalWarning: !N && !H,
                          guild: n,
                          showHeader: !N
                      }),
                  P.map((e) =>
                      (0, h.a0)({
                          dropHoveredIndex: E,
                          formField: e,
                          guild: n,
                          index: w.indexOf(e),
                          isDragEnabled: H && B,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: O,
                          updateFormField: G,
                          updateFormFieldOrder: U,
                          canRemove: !(N && P.length <= 1) && B,
                          actionsLocation: q,
                          fieldStyle: o.it.REGULAR
                      })
                  ),
                  _ &&
                      !A &&
                      B &&
                      (0, i.jsx)('div', {
                          className: j.addQuestionsContainer,
                          children: (0, i.jsx)(f.Z, {
                              addFormField: Q,
                              guild: n
                          })
                      })
              ]
          })
        : V;
};
