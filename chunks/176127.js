n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(435064),
    s = n(996909);
function c() {
    let e = (0, a.Wu)([o.Z], () => {
        var e;
        let t = null === (e = o.Z.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
        return null == t
            ? []
            : o.Z.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, i.jsx)('div', {
        className: l()(s.thumbnailStack, {
            [s['height-1']]: 1 === e.length,
            [s['height-2']]: 2 === e.length,
            [s['height-3']]: 3 === e.length,
            [s['height-max']]: e.length >= 4
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
                              className: s.thumbnail,
                              src: e.thumbnail
                          },
                          e.id
                      )
                    : (0, i.jsx)('div', {}, 'placeholder-'.concat(t))
            )
            .reverse()
    });
}
