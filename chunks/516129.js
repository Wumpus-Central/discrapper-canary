l.d(n, { Z: () => v });
var t = l(200651);
l(192379);
var i = l(120356),
    a = l.n(i),
    r = l(780384),
    s = l(481060),
    o = l(410030),
    d = l(44315),
    c = l(208567),
    u = l(981631),
    x = l(563537);
let m = u.Ilk.PRIMARY_400,
    h = u.Ilk.PRIMARY_500;
function v(e) {
    let { enabled: n, imageClassName: l, iconWrapperClassName: i, ...u } = e,
        v = (0, o.ZP)(),
        g = (0, r.wj)(v) ? m : h,
        j = {
            height: 18,
            width: 18,
            color: (0, d.Lq)(g)
        };
    return (0, t.jsx)(c.Z, {
        className: a()({
            [x.avatarUploader]: n,
            [x.avatarUploaderDisabled]: !n
        }),
        imageClassName: a()(l, x.avatarUploaderInnerSquare, { [x.avatarUploaderInnerSquareDisabled]: !n }),
        icon:
            null != u.image && '' !== u.image
                ? (0, t.jsx)(s.vdY, {
                      size: 'custom',
                      ...j
                  })
                : (0, t.jsx)(s.FmF, {
                      size: 'custom',
                      ...j
                  }),
        iconClassName: a()(x.avatarUploadIcon, x.hideDefaultIcon),
        iconWrapperClassName: i,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}
