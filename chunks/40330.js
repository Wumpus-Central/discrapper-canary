r.d(n, {
    p: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(112456),
    l = r.n(o),
    u = r(481060),
    c = r(403182),
    d = r(388032),
    f = r(914356);
let _ = (e) => {
        let { filename: n } = e,
            a = (0, c.uV)(n),
            s = r(148660)('./icon-file-'.concat(a, '.svg'));
        return (0, i.jsx)('img', {
            className: f.icon,
            src: s,
            alt: d.intl.formatToPlainString(d.t.g6KdFh, { fileType: a }),
            title: a
        });
    },
    h = (e) => {
        let { filename: n, size: r, progress: a, onCancelUpload: s, onClick: o, onContextMenu: c } = e,
            h = 100 === a,
            p = !h && r > 0;
        return (0, i.jsx)('div', {
            className: f.fileWrapper,
            children: (0, i.jsxs)('div', {
                className: f.file,
                children: [
                    (0, i.jsx)(_, { filename: n }),
                    (0, i.jsxs)('div', {
                        className: f.fileInner,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f.filenameWrapper,
                                children: [
                                    (0, i.jsx)(u.Clickable, {
                                        className: f.filename,
                                        onClick: o,
                                        onContextMenu: c,
                                        children: n
                                    }),
                                    p
                                        ? (0, i.jsx)('div', {
                                              className: f.size,
                                              children: '\u2014 '.concat(l().filesize(r))
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: f.progressContainer,
                                children: h
                                    ? d.intl.string(d.t.jfKTen)
                                    : (0, i.jsx)(u.Progress, {
                                          className: f.progress,
                                          percent: a
                                      })
                            })
                        ]
                    }),
                    h
                        ? null
                        : (0, i.jsx)(u.Clickable, {
                              onClick: s,
                              children: (0, i.jsx)(u.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: f.cancelButton
                              })
                          })
                ]
            })
        });
    },
    p = (e) => {
        let { className: n, url: r, fileName: a, fileSize: o, onClick: c, onContextMenu: d, renderAdjacentContent: h } = e;
        return (0, i.jsxs)('div', {
            className: s()(f.fileWrapper, n),
            children: [
                (0, i.jsxs)('div', {
                    className: f.file,
                    children: [
                        (0, i.jsx)(_, { filename: a }),
                        (0, i.jsxs)('div', {
                            className: f.fileInner,
                            children: [
                                (0, i.jsx)('div', {
                                    className: f.filenameLinkWrapper,
                                    children: (0, i.jsx)(u.Anchor, {
                                        className: f.fileNameLink,
                                        href: r,
                                        onClick: c,
                                        onContextMenu: d,
                                        children: a
                                    })
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: l().filesize(o)
                                })
                            ]
                        })
                    ]
                }),
                null != h && h()
            ]
        });
    };
n.Z = p;
