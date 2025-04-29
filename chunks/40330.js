n.d(t, {
    Z: () => p,
    p: () => _
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(112456),
    s = n.n(a),
    l = n(481060),
    c = n(403182),
    u = n(388032),
    d = n(634690);
let f = (e) => {
        let { filename: t } = e,
            i = (0, c.uV)(t),
            o = n(148660)('./icon-file-'.concat(i, '.svg'));
        return (0, r.jsx)('img', {
            className: d.icon,
            src: o,
            alt: u.intl.formatToPlainString(u.t.g6KdFh, { fileType: i }),
            title: i
        });
    },
    _ = (e) => {
        let { filename: t, size: n, progress: i, onCancelUpload: o, onClick: a, onContextMenu: c } = e,
            _ = 100 === i,
            p = !_ && n > 0;
        return (0, r.jsx)('div', {
            className: d.fileWrapper,
            children: (0, r.jsxs)('div', {
                className: d.file,
                children: [
                    (0, r.jsx)(f, { filename: t }),
                    (0, r.jsxs)('div', {
                        className: d.fileInner,
                        children: [
                            (0, r.jsxs)('div', {
                                className: d.filenameWrapper,
                                children: [
                                    (0, r.jsx)(l.P3F, {
                                        className: d.filename,
                                        onClick: a,
                                        onContextMenu: c,
                                        children: t
                                    }),
                                    p
                                        ? (0, r.jsx)('div', {
                                              className: d.size,
                                              children: '\u2014 '.concat(s().filesize(n))
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: d.progressContainer,
                                children: _
                                    ? u.intl.string(u.t.jfKTen)
                                    : (0, r.jsx)(l.Exd, {
                                          className: d.progress,
                                          percent: i
                                      })
                            })
                        ]
                    }),
                    _
                        ? null
                        : (0, r.jsx)(l.P3F, {
                              onClick: o,
                              children: (0, r.jsx)(l.Dio, {
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
        let { className: t, url: n, fileName: i, fileSize: a, onClick: c, onContextMenu: u, renderAdjacentContent: _ } = e;
        return (0, r.jsxs)('div', {
            className: o()(d.fileWrapper, t),
            children: [
                (0, r.jsxs)('div', {
                    className: d.file,
                    children: [
                        (0, r.jsx)(f, { filename: i }),
                        (0, r.jsxs)('div', {
                            className: d.fileInner,
                            children: [
                                (0, r.jsx)('div', {
                                    className: d.filenameLinkWrapper,
                                    children: (0, r.jsx)(l.eee, {
                                        className: d.fileNameLink,
                                        href: n,
                                        onClick: c,
                                        onContextMenu: u,
                                        children: i
                                    })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: s().filesize(a)
                                })
                            ]
                        })
                    ]
                }),
                null != _ && _()
            ]
        });
    };
