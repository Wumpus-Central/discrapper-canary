n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(435064),
    o = n(996909);
function c() {
    let e = (0, r.Wu)([s.Z], () => {
        var e;
        let t = null === (e = s.Z.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
        return null == t
            ? []
            : s.Z.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, i.jsx)('div', {
        className: a()(o.thumbnailStack, {
            [o['height-1']]: 1 === e.length,
            [o['height-2']]: 2 === e.length,
            [o['height-3']]: 3 === e.length,
            [o['height-max']]: e.length >= 4
        }),
        children: Array.from({
            ...e,
            length: 4
        })
            .map((e, t) =>
                null != e
                    ? (0, i.jsx)(
                          'img',
                          {
                              alt: '',
                              className: o.thumbnail,
                              src: e.thumbnail
                          },
                          e.id
                      )
                    : (0, i.jsx)('div', {}, 'placeholder-'.concat(t))
            )
            .reverse()
    });
}
