var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(608787),
    c = r(481060),
    d = r(40330),
    f = r(571989),
    _ = r(828061),
    h = r(259580),
    p = r(424218),
    m = r(388032),
    g = r(454231),
    E = r(763971);
function v(e) {
    var n;
    let r = 'utf-8',
        i = null !== (n = null == e ? void 0 : e.split('charset=').slice(-1)[0]) && void 0 !== n ? n : r;
    try {
        return new TextDecoder(i);
    } catch (n) {
        if ((null == e ? void 0 : e.startsWith('text')) || i.toLowerCase().includes('utf')) return new TextDecoder(r);
        throw n;
    }
}
function I(e, n) {
    let [r, i] = s.useState(!1),
        [a, o] = s.useState(null),
        [l, u] = s.useState(1);
    return (
        s.useEffect(() => {
            let r = 50000;
            (async function a() {
                try {
                    var a, s;
                    let l = await fetch(e, {
                            headers: {
                                Range: 'bytes=0-'.concat(r),
                                Accept: 'text/plain'
                            }
                        }),
                        c = v(n).decode(await l.arrayBuffer()),
                        d = null !== (a = l.headers.get('content-range')) && void 0 !== a ? a : '0',
                        f = null !== (s = l.headers.get('content-length')) && void 0 !== s ? s : '1',
                        _ = parseInt(d.split('/')[1]) - parseInt(f);
                    o(0 === _ ? c : c.slice(0, -1)), u(_), i(!1);
                } catch (e) {
                    u(0), i(!0);
                }
            })();
        }, [e, n]),
        {
            fileContents: a,
            bytesLeft: l,
            hadError: r
        }
    );
}
function T(e) {
    let { text: n, language: i } = e,
        s = () =>
            (0, a.jsx)('pre', {
                children: (0, a.jsx)('code', {
                    className: l()(E.scrollbarGhostHairline, g.codeView, 'hljs'),
                    children: n
                })
            });
    return (0, a.jsx)(u.GI, {
        createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
        webpackId: 364964,
        render: (e) => {
            if (!e.hasLanguage(i)) return s();
            let r = e.highlight(i, n, !0);
            return null == r
                ? s()
                : (0, a.jsx)('pre', {
                      children: (0, a.jsx)('code', {
                          className: l()(E.scrollbarGhostHairline, g.codeView, 'hljs', r.language),
                          dangerouslySetInnerHTML: { __html: r.value }
                      })
                  });
        },
        renderFallback: () => s()
    });
}
function b(e) {
    let { expanded: n, setExpanded: r, isWholeFile: i, numLines: s } = e,
        o = m.intl.formatToPlainString(i ? m.t.Go5Vvr : m.t.yJcYam, { lines: s });
    return (0, a.jsx)(c.Tooltip, {
        text: ''.concat(n ? m.intl.string(m.t.iTcumZ) : m.intl.string(m.t.dcl9MT), ' (').concat(o, ')'),
        children: (e) =>
            (0, a.jsxs)(c.Clickable, {
                ...e,
                className: g.toggleExpandSection,
                onClick: () => {
                    r(!n);
                },
                children: [(0, a.jsx)(h.Z, { direction: n ? h.Z.Directions.UP : h.Z.Directions.DOWN }), n ? m.intl.string(m.t.iTcumZ) : m.intl.string(m.t.dcl9MT)]
            })
    });
}
function y(e) {
    let { url: n, fileName: r, fileSize: i } = e,
        s = ''.concat(r, ' (').concat((0, p.IC)(i), ')');
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Tooltip, {
                text: s,
                children: (e) =>
                    (0, a.jsx)('span', {
                        ...e,
                        className: l()(g.downloadSection, g.attachmentName),
                        children: r
                    })
            }),
            (0, a.jsx)(c.Tooltip, {
                text: s,
                children: (e) =>
                    (0, a.jsx)('span', {
                        ...e,
                        className: l()(g.downloadSection, g.formattedSize),
                        children: (0, p.IC)(i)
                    })
            }),
            (0, a.jsx)(c.Tooltip, {
                text: ''.concat(m.intl.string(m.t['1WjMbG']), ' ').concat(s),
                children: (e) =>
                    (0, a.jsx)(c.Anchor, {
                        ...e,
                        className: g.downloadSection,
                        href: n,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: (0, a.jsx)(c.DownloadIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: g.downloadButton
                        })
                    })
            })
        ]
    });
}
function S(e) {
    let { language: n, setLanguage: r } = e;
    return (0, a.jsx)(c.Popout, {
        position: 'left',
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(c.Dialog, {
                'aria-label': m.intl.string(m.t.utm4qq),
                children: (0, a.jsx)(c.Combobox, {
                    className: g.languageSelector,
                    multiSelect: !1,
                    placeholder: m.intl.string(m.t.Gofftb),
                    value: new Set([n]),
                    autoFocus: !0,
                    onChange: (e) => {
                        r(e), i();
                    },
                    children: (e) =>
                        Array.from(_.u)
                            .filter((n) => n.toLowerCase().includes(e.toLowerCase()))
                            .map((e) =>
                                (0, a.jsx)(
                                    c.ComboboxItem,
                                    {
                                        value: e,
                                        children: (0, a.jsx)(c.ComboboxItem.Label, { children: e })
                                    },
                                    e
                                )
                            )
                })
            });
        },
        children: (e) =>
            (0, a.jsx)(c.Tooltip, {
                text: m.intl.string(m.t.utm4qq),
                children: (n) =>
                    (0, a.jsx)(c.AngleBracketsIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...n,
                        ...e,
                        className: g.codeIcon
                    })
            })
    });
}
function A(e) {
    return (0, a.jsx)(c.Tooltip, {
        text: m.intl.string(m.t['0PQYk5']),
        children: (n) =>
            (0, a.jsx)(c.Clickable, {
                ...n,
                className: g.openFullPreviewSection,
                onClick: () => {
                    (0, c.openModal)((n) =>
                        (0, a.jsx)(C, {
                            ...e,
                            ...n
                        })
                    );
                },
                children: (0, a.jsx)(c.MaximizeIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function N(e) {
    var n;
    let { url: r, fileName: i, fileSize: s, fileContents: o, expanded: u, setExpanded: d, language: _, setLanguage: h, bytesLeft: E, className: v } = e,
        I = null == o ? void 0 : o.split('\n'),
        N = null !== (n = null == I ? void 0 : I.length) && void 0 !== n ? n : 0,
        C = u ? 100 : 6,
        R = 0 === E,
        O = '';
    R && u && N > C ? (O = '\n...') : !R && (O = '...'), '' !== O && (R ? (O += ' ' + m.intl.formatToPlainString(m.t.DQnFp6, { lines: N - C })) : (O += ' ' + m.intl.formatToPlainString(m.t['1+gGcH'], { formattedBytes: (0, p.IC)(E) })));
    let D = (null == I ? void 0 : I.slice(0, C).join('\n')) + O,
        L = (0, f.yx)(D),
        x = u || C < N;
    return (0, a.jsxs)('div', {
        className: l()(v, g.container),
        children: [
            (0, a.jsx)('div', {
                className: l()(g.textContainer, { [g.expanded]: u }),
                children:
                    null == o
                        ? (0, a.jsx)(c.Spinner, { className: g.spinner })
                        : (0, a.jsx)(T, {
                              text: L,
                              language: _
                          })
            }),
            (0, a.jsxs)(c.Text, {
                color: 'header-secondary',
                className: g.footer,
                variant: 'text-sm/normal',
                children: [
                    x
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(b, {
                                      expanded: u,
                                      setExpanded: d,
                                      isWholeFile: R,
                                      numLines: N
                                  }),
                                  (0, a.jsx)(A, {
                                      url: r,
                                      fileName: i,
                                      fileSize: s,
                                      language: _,
                                      fileContents: o,
                                      bytesLeft: E
                                  })
                              ]
                          })
                        : null,
                    (0, a.jsx)('div', { className: g.footerGap }),
                    (0, a.jsx)(y, {
                        url: r,
                        fileName: i,
                        fileSize: s
                    }),
                    (0, a.jsx)(S, {
                        language: _,
                        setLanguage: h
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { url: n, fileName: r, fileSize: i, transitionState: o, language: l, fileContents: u, bytesLeft: d } = e,
        [f, _] = s.useState(l),
        h = null != u ? u : '';
    return (
        0 !== d && (h += '... '.concat(m.intl.formatToPlainString(m.t['1+gGcH'], { formattedBytes: (0, p.IC)(d) }))),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: o,
            'aria-label': m.intl.string(m.t.qxQjc3),
            size: c.ModalSize.LARGE,
            className: g.modalRoot,
            children: (0, a.jsxs)('div', {
                className: g.modalContent,
                children: [
                    (0, a.jsx)(c.ScrollerThin, {
                        className: g.modalTextContainer,
                        children:
                            null == u
                                ? (0, a.jsx)(c.Spinner, { className: g.spinner })
                                : (0, a.jsx)(T, {
                                      text: h,
                                      language: f
                                  })
                    }),
                    (0, a.jsxs)(c.Text, {
                        color: 'header-secondary',
                        className: g.footer,
                        variant: 'text-sm/normal',
                        children: [
                            (0, a.jsx)('div', { className: g.footerGap }),
                            (0, a.jsx)(y, {
                                url: n,
                                fileName: r,
                                fileSize: i
                            }),
                            (0, a.jsx)(S, {
                                language: f,
                                setLanguage: _
                            })
                        ]
                    })
                ]
            })
        })
    );
}
n.Z = s.memo(
    function (e) {
        let { url: n, fileName: r, fileSize: i, contentType: o, className: u, onClick: c, onContextMenu: f } = e,
            [_, h] = s.useState(!1),
            [p, m] = s.useState(r.split('.').slice(-1)[0]),
            { fileContents: E, bytesLeft: v, hadError: T } = I(n, o);
        return T
            ? (0, a.jsx)(d.Z, {
                  url: n,
                  fileName: r,
                  fileSize: i,
                  onClick: c,
                  onContextMenu: f,
                  className: u
              })
            : (0, a.jsx)(N, {
                  url: n,
                  fileName: r,
                  fileSize: i,
                  fileContents: E,
                  bytesLeft: v,
                  expanded: _,
                  setExpanded: h,
                  language: p,
                  setLanguage: m,
                  className: l()(g.newMosaicStyle, u)
              });
    },
    (e, n) => e.url === n.url && e.className === n.className
);
