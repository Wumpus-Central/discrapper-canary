n.d(t, {
    Z: function () {
        return I;
    },
    q: function () {
        return S;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(232567),
    o = n(700582),
    c = n(90641),
    d = n(615830),
    u = n(630759),
    m = n(931500),
    g = n(921157),
    h = n(171368),
    p = n(594174),
    x = n(51144),
    f = n(388032),
    _ = n(47074),
    E = n(232186);
function C(e) {
    let { userId: t, count: n } = e,
        c = (0, r.e7)([p.default], () => p.default.getUser(t)),
        d = x.ZP.getFormattedName(c),
        m = s.useCallback(() => {
            (0, u.Zn)(t);
        }, [t]),
        g = s.useCallback(() => (0, h.openUserProfileModal)({ userId: t }), [t]);
    return (
        s.useEffect(() => {
            (0, l.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: _.section,
            children: [
                null != c &&
                    (0, i.jsx)(o.Z, {
                        className: _.avatar,
                        user: c,
                        size: a.AvatarSizes.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: _.text,
                    children: [
                        (0, i.jsx)(a.Clickable, {
                            className: _.username,
                            onClick: g,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: d
                            })
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: f.intl.format(f.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(a.Clickable, {
                    onClick: m,
                    className: _.sectionIconContainer,
                    children: (0, i.jsx)(a.TrashIcon, { size: 'xs' })
                })
            ]
        })
    );
}
function T(e) {
    let { className: t, userId: n, verification: r, index: l } = e,
        o = (0, u.bo)(r.timestamp),
        c = s.useCallback(() => {
            (0, u.ZU)(n, r.verifiedKey);
        }, [r.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: _.text,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: f.intl.format(f.t.N4qBBA, { index: l + 1 })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(a.Clickable, {
                className: _.icon,
                onClick: c,
                children: (0, i.jsx)(a.XSmallIcon, {
                    size: 'md',
                    color: a.tokens.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function S(e) {
    let { userId: t } = e,
        n = (0, m._)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C, {
                userId: t,
                count: n.length
            }),
            n.map((e, r) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(T, {
                                className: _.row,
                                userId: t,
                                index: r,
                                verification: e
                            }),
                            r !== n.length - 1 && (0, i.jsx)('div', { className: _.divider })
                        ]
                    },
                    ''.concat(r, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
function b(e) {
    let { userIds: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(a.FormItem, {
                      className: E.marginBottom20,
                      children: [
                          (0, i.jsx)(a.FormTitle, {
                              tag: a.FormTitleTags.H5,
                              className: E.marginBottom8,
                              children: f.intl.string(f.t['5b3FND'])
                          }),
                          (0, i.jsx)(a.FormText, {
                              type: a.FormTextTypes.DESCRIPTION,
                              children: f.intl.format(f.t['7w9ymJ'], { helpArticle: (0, u.pL)() })
                          })
                      ]
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: _.item,
                              children: (0, i.jsx)(S, { userId: e })
                          },
                          e
                      )
                  )
              ]
          });
}
function I() {
    let e = (0, r.e7)([d.Z], () => d.Z.getPersistentCodesEnabled()),
        t = (0, g.s)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.FormSection, {
                tag: a.FormTitleTags.H1,
                title: f.intl.string(f.t['9Q/PQk']),
                children: [
                    (0, i.jsx)(a.FormText, {
                        type: a.FormTextTypes.DESCRIPTION,
                        className: E.marginBottom20,
                        children: f.intl.format(f.t['8IwQfH'], { helpArticle: (0, u.uV)() })
                    }),
                    (0, i.jsxs)(a.FormItem, {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H5,
                                className: E.marginBottom8,
                                children: f.intl.string(f.t['2Ap8sr'])
                            }),
                            (0, i.jsx)(a.FormSwitch, {
                                hideBorder: 0 === t.length,
                                value: e,
                                note: f.intl.format(f.t['7CXSaG'], { helpArticle: (0, u.aZ)() }),
                                onChange: c.Z.updatePersistentCodesEnabled,
                                children: f.intl.string(f.t['opi/XF'])
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(b, { userIds: t })
        ]
    });
}
