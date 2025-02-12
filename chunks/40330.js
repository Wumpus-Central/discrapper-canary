n.d(t, {
    Z: () => p,
    p: () => _
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(112456),
    o = n.n(s),
    l = n(481060),
    u = n(403182),
    c = n(388032),
    d = n(819208);
let f = (e) => {
        let { filename: t } = e,
            r = (0, u.uV)(t),
            a = n(148660)('./icon-file-'.concat(r, '.svg'));
        return (0, i.jsx)('img', {
            className: d.icon,
            src: a,
            alt: c.intl.formatToPlainString(c.t.g6KdFh, { fileType: r }),
            title: r
        });
    },
    _ = (e) => {
        let { filename: t, size: n, progress: r, onCancelUpload: a, onClick: s, onContextMenu: u } = e,
            _ = 100 === r,
            p = !_ && n > 0;
        return (0, i.jsx)('div', {
            className: d.fileWrapper,
            children: (0, i.jsxs)('div', {
                className: d.file,
                children: [
                    (0, i.jsx)(f, { filename: t }),
                    (0, i.jsxs)('div', {
                        className: d.fileInner,
                        children: [
                            (0, i.jsxs)('div', {
                                className: d.filenameWrapper,
                                children: [
                                    (0, i.jsx)(l.P3F, {
                                        className: d.filename,
                                        onClick: s,
                                        onContextMenu: u,
                                        children: t
                                    }),
                                    p
                                        ? (0, i.jsx)('div', {
                                              className: d.size,
                                              children: '\u2014 '.concat(o().filesize(n))
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: d.progressContainer,
                                children: _
                                    ? c.intl.string(c.t.jfKTen)
                                    : (0, i.jsx)(l.Exd, {
                                          className: d.progress,
                                          percent: r
                                      })
                            })
                        ]
                    }),
                    _
                        ? null
                        : (0, i.jsx)(l.P3F, {
                              onClick: a,
                              children: (0, i.jsx)(l.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: d.cancelButton
                              })
                          })
                ]
            })
        });
    },
    p = (e) => {
        let { className: t, url: n, fileName: r, fileSize: s, onClick: u, onContextMenu: c, renderAdjacentContent: _ } = e;
        return (0, i.jsxs)('div', {
            className: a()(d.fileWrapper, t),
            children: [
                (0, i.jsxs)('div', {
                    className: d.file,
                    children: [
                        (0, i.jsx)(f, { filename: r }),
                        (0, i.jsxs)('div', {
                            className: d.fileInner,
                            children: [
                                (0, i.jsx)('div', {
                                    className: d.filenameLinkWrapper,
                                    children: (0, i.jsx)(l.eee, {
                                        className: d.fileNameLink,
                                        href: n,
                                        onClick: u,
                                        onContextMenu: c,
                                        children: r
                                    })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: o().filesize(s)
                                })
                            ]
                        })
                    ]
                }),
                null != _ && _()
            ]
        });
    };
