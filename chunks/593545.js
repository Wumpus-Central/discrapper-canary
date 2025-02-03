n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(608787),
    l = n(481060),
    u = n(40330),
    c = n(571989),
    d = n(828061),
    f = n(259580),
    _ = n(424218),
    p = n(388032),
    h = n(454231),
    m = n(763971);
function g(e) {
    var t;
    let n = 'utf-8',
        i = null !== (t = null == e ? void 0 : e.split('charset=').slice(-1)[0]) && void 0 !== t ? t : n;
    try {
        return new TextDecoder(i);
    } catch (t) {
        if ((null == e ? void 0 : e.startsWith('text')) || i.toLowerCase().includes('utf')) return new TextDecoder(n);
        throw t;
    }
}
function E(e, t) {
    let [n, i] = r.useState(!1),
        [a, s] = r.useState(null),
        [o, l] = r.useState(1);
    return (
        r.useEffect(() => {
            let n = 50000;
            (async function () {
                try {
                    var r, a;
                    let o = await fetch(e, {
                            headers: {
                                Range: 'bytes=0-'.concat(n),
                                Accept: 'text/plain'
                            }
                        }),
                        u = g(t).decode(await o.arrayBuffer()),
                        c = null !== (r = o.headers.get('content-range')) && void 0 !== r ? r : '0',
                        d = null !== (a = o.headers.get('content-length')) && void 0 !== a ? a : '1',
                        f = parseInt(c.split('/')[1]) - parseInt(d);
                    s(0 === f ? u : u.slice(0, -1)), l(f), i(!1);
                } catch (e) {
                    l(0), i(!0);
                }
            })();
        }, [e, t]),
        {
            fileContents: a,
            bytesLeft: o,
            hadError: n
        }
    );
}
function v(e) {
    let { text: t, language: r } = e,
        a = () =>
            (0, i.jsx)('pre', {
                children: (0, i.jsx)('code', {
                    className: s()(m.scrollbarGhostHairline, h.codeView, 'hljs'),
                    children: t
                })
            });
    return (0, i.jsx)(o.GI, {
        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
        webpackId: 364964,
        render: (e) => {
            if (!e.hasLanguage(r)) return a();
            let n = e.highlight(r, t, !0);
            return null == n
                ? a()
                : (0, i.jsx)('pre', {
                      children: (0, i.jsx)('code', {
                          className: s()(m.scrollbarGhostHairline, h.codeView, 'hljs', n.language),
                          dangerouslySetInnerHTML: { __html: n.value }
                      })
                  });
        },
        renderFallback: () => a()
    });
}
function y(e) {
    let { expanded: t, setExpanded: n, isWholeFile: r, numLines: a } = e,
        s = p.intl.formatToPlainString(r ? p.t.Go5Vvr : p.t.yJcYam, { lines: a });
    return (0, i.jsx)(l.ua7, {
        text: ''.concat(t ? p.intl.string(p.t.iTcumZ) : p.intl.string(p.t.dcl9MT), ' (').concat(s, ')'),
        children: (e) =>
            (0, i.jsxs)(l.P3F, {
                ...e,
                className: h.toggleExpandSection,
                onClick: () => {
                    n(!t);
                },
                children: [(0, i.jsx)(f.Z, { direction: t ? f.Z.Directions.UP : f.Z.Directions.DOWN }), t ? p.intl.string(p.t.iTcumZ) : p.intl.string(p.t.dcl9MT)]
            })
    });
}
function I(e) {
    let { url: t, fileName: n, fileSize: r } = e,
        a = ''.concat(n, ' (').concat((0, _.IC)(r), ')');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.ua7, {
                text: a,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        className: s()(h.downloadSection, h.attachmentName),
                        children: n
                    })
            }),
            (0, i.jsx)(l.ua7, {
                text: a,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        className: s()(h.downloadSection, h.formattedSize),
                        children: (0, _.IC)(r)
                    })
            }),
            (0, i.jsx)(l.ua7, {
                text: ''.concat(p.intl.string(p.t['1WjMbG']), ' ').concat(a),
                children: (e) =>
                    (0, i.jsx)(l.eee, {
                        ...e,
                        className: h.downloadSection,
                        href: t,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: (0, i.jsx)(l._8t, {
                            size: 'md',
                            color: 'currentColor',
                            className: h.downloadButton
                        })
                    })
            })
        ]
    });
}
function b(e) {
    let { language: t, setLanguage: n } = e;
    return (0, i.jsx)(l.yRy, {
        position: 'left',
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(l.VqE, {
                'aria-label': p.intl.string(p.t.utm4qq),
                children: (0, i.jsx)(l.hQY, {
                    className: h.languageSelector,
                    multiSelect: !1,
                    placeholder: p.intl.string(p.t.Gofftb),
                    value: new Set([t]),
                    autoFocus: !0,
                    onChange: (e) => {
                        n(e), r();
                    },
                    children: (e) =>
                        Array.from(d.u)
                            .filter((t) => t.toLowerCase().includes(e.toLowerCase()))
                            .map((e) =>
                                (0, i.jsx)(
                                    l.lo1,
                                    {
                                        value: e,
                                        children: (0, i.jsx)(l.lo1.Label, { children: e })
                                    },
                                    e
                                )
                            )
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(l.ua7, {
                text: p.intl.string(p.t.utm4qq),
                children: (t) =>
                    (0, i.jsx)(l.nF$, {
                        size: 'md',
                        color: 'currentColor',
                        ...t,
                        ...e,
                        className: h.codeIcon
                    })
            })
    });
}
function T(e) {
    return (0, i.jsx)(l.ua7, {
        text: p.intl.string(p.t['0PQYk5']),
        children: (t) =>
            (0, i.jsx)(l.P3F, {
                ...t,
                className: h.openFullPreviewSection,
                onClick: () => {
                    (0, l.h7j)((t) =>
                        (0, i.jsx)(A, {
                            ...e,
                            ...t
                        })
                    );
                },
                children: (0, i.jsx)(l.bJT, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function S(e) {
    var t;
    let { url: n, fileName: r, fileSize: a, fileContents: o, expanded: u, setExpanded: d, language: f, setLanguage: m, bytesLeft: g, className: E } = e,
        S = null == o ? void 0 : o.split('\n'),
        A = null !== (t = null == S ? void 0 : S.length) && void 0 !== t ? t : 0,
        N = u ? 100 : 6,
        C = 0 === g,
        R = '';
    C && u && A > N ? (R = '\n...') : C || (R = '...'), '' !== R && (C ? (R += ' ' + p.intl.formatToPlainString(p.t.DQnFp6, { lines: A - N })) : (R += ' ' + p.intl.formatToPlainString(p.t['1+gGcH'], { formattedBytes: (0, _.IC)(g) })));
    let O = (null == S ? void 0 : S.slice(0, N).join('\n')) + R,
        D = (0, c.yx)(O),
        x = u || N < A;
    return (0, i.jsxs)('div', {
        className: s()(E, h.container),
        children: [
            (0, i.jsx)('div', {
                className: s()(h.textContainer, { [h.expanded]: u }),
                children:
                    null == o
                        ? (0, i.jsx)(l.$jN, { className: h.spinner })
                        : (0, i.jsx)(v, {
                              text: D,
                              language: f
                          })
            }),
            (0, i.jsxs)(l.Text, {
                color: 'header-secondary',
                className: h.footer,
                variant: 'text-sm/normal',
                children: [
                    x
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(y, {
                                      expanded: u,
                                      setExpanded: d,
                                      isWholeFile: C,
                                      numLines: A
                                  }),
                                  (0, i.jsx)(T, {
                                      url: n,
                                      fileName: r,
                                      fileSize: a,
                                      language: f,
                                      fileContents: o,
                                      bytesLeft: g
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)('div', { className: h.footerGap }),
                    (0, i.jsx)(I, {
                        url: n,
                        fileName: r,
                        fileSize: a
                    }),
                    (0, i.jsx)(b, {
                        language: f,
                        setLanguage: m
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { url: t, fileName: n, fileSize: a, transitionState: s, language: o, fileContents: u, bytesLeft: c } = e,
        [d, f] = r.useState(o),
        m = null != u ? u : '';
    return (
        0 !== c && (m += '... '.concat(p.intl.formatToPlainString(p.t['1+gGcH'], { formattedBytes: (0, _.IC)(c) }))),
        (0, i.jsx)(l.Y0X, {
            transitionState: s,
            'aria-label': p.intl.string(p.t.qxQjc3),
            size: l.CgR.LARGE,
            className: h.modalRoot,
            children: (0, i.jsxs)('div', {
                className: h.modalContent,
                children: [
                    (0, i.jsx)(l.zJl, {
                        className: h.modalTextContainer,
                        children:
                            null == u
                                ? (0, i.jsx)(l.$jN, { className: h.spinner })
                                : (0, i.jsx)(v, {
                                      text: m,
                                      language: d
                                  })
                    }),
                    (0, i.jsxs)(l.Text, {
                        color: 'header-secondary',
                        className: h.footer,
                        variant: 'text-sm/normal',
                        children: [
                            (0, i.jsx)('div', { className: h.footerGap }),
                            (0, i.jsx)(I, {
                                url: t,
                                fileName: n,
                                fileSize: a
                            }),
                            (0, i.jsx)(b, {
                                language: d,
                                setLanguage: f
                            })
                        ]
                    })
                ]
            })
        })
    );
}
let N = r.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: o, className: l, onClick: c, onContextMenu: d } = e,
            [f, _] = r.useState(!1),
            [p, m] = r.useState(n.split('.').slice(-1)[0]),
            { fileContents: g, bytesLeft: v, hadError: y } = E(t, o);
        return y
            ? (0, i.jsx)(u.Z, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: d,
                  className: l
              })
            : (0, i.jsx)(S, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: g,
                  bytesLeft: v,
                  expanded: f,
                  setExpanded: _,
                  language: p,
                  setLanguage: m,
                  className: s()(h.newMosaicStyle, l)
              });
    },
    (e, t) => e.url === t.url && e.className === t.className
);
