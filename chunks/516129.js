t.d(n, { Z: () => v });
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(780384),
    a = t(481060),
    o = t(410030),
    d = t(44315),
    c = t(208567),
    u = t(981631),
    x = t(796749);
let h = u.Ilk.PRIMARY_400,
    m = u.Ilk.PRIMARY_500;
function v(e) {
    let { enabled: n, imageClassName: t, iconWrapperClassName: i, ...u } = e,
        v = (0, o.ZP)(),
        g = (0, s.wj)(v) ? h : m,
        j = {
            height: 18,
            width: 18,
            color: (0, d.Lq)(g)
        };
    return (0, l.jsx)(c.Z, {
        className: r()({
            [x.avatarUploader]: n,
            [x.avatarUploaderDisabled]: !n
        }),
        imageClassName: r()(t, x.avatarUploaderInnerSquare, { [x.avatarUploaderInnerSquareDisabled]: !n }),
        icon:
            null != u.image && '' !== u.image
                ? (0, l.jsx)(a.vdY, {
                      size: 'custom',
                      ...j
                  })
                : (0, l.jsx)(a.FmF, {
                      size: 'custom',
                      ...j
                  }),
        iconClassName: r()(x.avatarUploadIcon, x.hideDefaultIcon),
        iconWrapperClassName: i,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}
