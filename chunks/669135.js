n.d(t, { S: () => o });
var r = n(990547),
    i = n(573261),
    a = n(981631);
let o = async function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = { registration_id: e };
    return (
        await i.Z.post({
            url: a.ANM.USER_WARP_LICENSE,
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
