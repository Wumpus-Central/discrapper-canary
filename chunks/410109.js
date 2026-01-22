n.d(t, { R: () => s });
var r = n(110259),
    i = n(499785),
    a = n(652215);
let s = async function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = { registration_id: e };
    return (
        await i.A.post({
            url: a.Rsh.USER_WARP_LICENSE,
            body: n,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !0,
            trackedActionData: {
                event: r.NetworkActionNames.NITRO_WARP_CREATE_LICENSE,
                properties: { is_on_connect: t },
            },
        })
    ).body.license_key;
};
