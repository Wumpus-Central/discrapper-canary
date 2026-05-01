e.d(t, { default: () => tm });
var n = e(627968),
    r = e(64700),
    l = e(503698),
    a = e.n(l),
    i = e(284009),
    s = e.n(i),
    o = e(702841),
    d = e(661531),
    u = e(868285),
    g = e(36525),
    q = e(314116),
    c = e(834730),
    m = e(696986),
    C = e(243721),
    p = e(783878),
    h = e(871682),
    f = e(628284),
    U = e(192308),
    V = e(935462),
    v = e(534514),
    x = e(364522),
    b = e(292666),
    K = e(452027),
    F = e(821609),
    j = e(66834),
    I = e(262828),
    N = e(915089),
    X = e(722888),
    T = e(835245),
    W = e(504345),
    P = e(140735),
    Q = e(408018),
    z = e(201349),
    Z = e(95701),
    L = e(31717),
    S = e(652215),
    G = e(375708),
    O = e(107261),
    R = e(792034);
let B = (0, T.A)(),
    y = (0, Z.createChannelRecord)({ id: "1", type: S.rbe.DM });
function k() {
    return new Promise((A) => {
        A({ shouldClear: !1, shouldRefocus: !0 });
    });
}
function Y(A) {
    let { hasError: t, maxLength: e, text: r } = A;
    return (0, n.jsxs)("div", {
        className: a()(R.Ru, { [R.hz]: t }),
        "aria-hidden": "true",
        children: [r?.length ?? 0, " ", null != e && `/ ${e}`],
    });
}
function E(A) {
    let {
            "aria-labelledby": t,
            className: e,
            id: l,
            autoFocus: i,
            maxLength: s,
            onChange: o,
            onSubmit: d,
            showCharacterCount: u = !1,
            placeholder: g,
            required: q,
            value: c,
            enableThemedBackground: m = !1,
            parentModalKey: C,
            label: p,
            errorMessage: h,
        } = A,
        f = (0, W.xW)(),
        [U, V] = r.useState(() => (0, Q.x7)(c)),
        v = r.useRef(!0 === i),
        x = t ?? f?.titleId,
        b = f?.errorId ?? B;
    function F(A, t, e) {
        o(t), V(e);
    }
    let j = r.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: { alwaysUseLayer: !0, small: !0 },
            disableAutoFocus: !0 !== i,
            drafts: { type: L.C.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: { useDisabledStylesOnSubmit: !0, disableEnterToSubmit: !0 },
        }),
        [i],
    );
    return (0, n.jsx)(K.D, {
        label: p,
        errorMessage: h,
        id: l,
        required: q,
        children: (A) =>
            (0, n.jsxs)(z.Ay, {
                id: A?.controlId ?? l,
                "aria-describedby": A?.describedById ?? b,
                "aria-labelledby": x,
                "aria-errormessage": A?.errorMessageId,
                "aria-invalid": A?.errorMessageId != null,
                className: O.T,
                innerClassName: a()(e, O.n),
                maxCharacterCount: s,
                onChange: F,
                placeholder: g,
                required: q,
                channel: y,
                textValue: c,
                richValue: U,
                type: j,
                onBlur: () => {
                    v.current = !1;
                },
                onFocus: () => {
                    v.current = !0;
                },
                focused: v.current,
                onSubmit: d ?? k,
                disableThemedBackground: !m,
                parentModalKey: C,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === u &&
                        (0, n.jsx)(Y, {
                            hasError: null != f.error || (null != s && c.length > s),
                            text: c,
                            maxLength: s,
                        }),
                    null != s && (0, n.jsx)(P.A, { id: B, children: G.intl.format(G.t["+DFxLc"], { maxLength: s }) }),
                ],
            }),
    });
}
var D = e(465932),
    H = e(2553),
    w = e(885386),
    M = e(317525),
    J = e(580630),
    _ = e(371794),
    $ = e(218394),
    AA = e(636537),
    At = e(765178),
    Ae = e(228366),
    An = e(845584),
    Ar = e(417325),
    Al = e(565150),
    Aa = e(787458),
    Ai = e(723444),
    As = e(626584),
    Ao = e(71393),
    Ad = e(292348),
    Au = e(535736),
    Ag = e(871109),
    Aq = e(253141);
let Ac = new As.A("ProductAttachmentManager");
class Am {
    guildId;
    editSkuId;
    target = new Au.A();
    onFileSizeError;
    existingAttachmentIds = new Set();
    uploads = [];
    constructor({ guildId: A, editSkuId: t, onFileSizeError: e }) {
        (this.editSkuId = t), (this.guildId = A), (this.onFileSizeError = e);
        const n = Ag.A.getGuildProduct(t ?? "")?.attachments;
        null != n &&
            (this.uploads = n.map((t) => {
                this.existingAttachmentIds.add(t.id);
                let e = new Ar.bK(
                    {
                        id: t.id,
                        platform: Al.xz.WEB,
                        origin: "unknown:guild_product_attachment",
                        file: { name: t.filename, lastModified: 0, size: t.size ?? 0 },
                    },
                    A,
                );
                return (e.status = Ar.jP.COMPLETED), e;
            }));
    }
    generateInitialProgresses = () => {
        let A = {};
        for (let t of this.uploads) A[t.id] = 1;
        return A;
    };
    addAttachment(A, t) {
        let e = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= e)
            throw (
                (At.O.announce(G.intl.formatToPlainString(G.t["0QDZ4J"], { maxAttachmentsCount: e })),
                Error("Too many attachments"))
            );
        A.target = Aa.m.GUILD_PRODUCT_ATTACHMENT;
        let n = new Ar.bK(A, this.guildId);
        n.upload(),
            n.on("error", (e) => {
                e === S.t02.ENTITY_TOO_LARGE && this.onFileSizeError();
                let r = "number" == typeof e && e > 0 ? -e : -1,
                    l = (0, Aq.kt)(r),
                    a = A.file?.name;
                null != a
                    ? At.O.announce(G.intl.formatToPlainString(G.t["+YVkfX"], { filename: a, reason: l }))
                    : At.O.announce(G.intl.formatToPlainString(G.t.mBkf6Z, { reason: l })),
                    t((A) => ({ ...A, [n.id]: r }));
            }),
            n.on("progress", (A, e) => {
                t((t) => ({ ...t, [n.id]: A / e }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(A) {
        let t = this.uploads.findIndex((t) => t.id === A);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let A of this.uploads) A.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(A) {
        let t,
            { priceTier: e, createNewRole: n, imageName: r, ...l } = A;
        if (this.uploads.some((A) => A.status === Ar.jP.ERROR))
            throw Error("Cannot create product with failed attachments");
        "unlinkRole" in l && (t = l.unlinkRole);
        let a = this.uploads.filter((A) => !this.existingAttachmentIds.has(A.id)),
            i = this.uploads
                .filter((A) => this.existingAttachmentIds.has(A.id))
                .map((A) => ({ filename: A.item.file?.name, id: A.id })),
            s = (0, Ai.I)(),
            o = (await s.uploadFiles(a)).map((A, t) => (0, Ad.OW)(A, t)),
            d = null != this.editSkuId ? AA.Bo.patch : AA.Bo.post,
            u =
                null != this.editSkuId
                    ? S.Rsh.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId)
                    : S.Rsh.GUILD_PRODUCTS(this.guildId),
            g = (
                await d({
                    url: u,
                    rejectWithError: !1,
                    body: {
                        ...l,
                        price_tier: e,
                        create_new_role: n,
                        image_name: r,
                        unlink_role: t,
                        attachments: i.length > 0 ? [...i, ...o] : o,
                    },
                })
            ).body;
        return (
            Ac.log("Created/updated product:", g),
            null != g &&
                (null != this.editSkuId
                    ? await Ae.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: g })
                    : await Ae.h.dispatch({ type: "GUILD_PRODUCT_CREATE", product: g })),
            g
        );
    }
}
let AC = r.createContext(void 0);
function Ap() {
    let A = r.useContext(AC);
    if (null == A) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return A;
}
function Ah(A) {
    let { children: t, guildId: e, ...l } = A,
        a = (function (A, t) {
            let { editSkuId: e, onFileSizeError: n } = t,
                l = (0, o.bG)([Ao.A], () => Ao.A.getGuild(A)),
                [a, i] = r.useState({ editSkuId: e, onFileSizeError: n }),
                s = r.useMemo(() => new Am({ guildId: A, ...a }), [A, a]),
                [d, u] = r.useState(s.generateInitialProgresses),
                [, g] = r.useState(null);
            r.useLayoutEffect(() => {
                u(s.generateInitialProgresses());
            }, [s]);
            let [q, c] = r.useState(),
                [m, C] = r.useState(),
                p = r.useCallback(
                    (A) => {
                        s.deleteAttachment(A) && g({});
                    },
                    [s],
                ),
                h = r.useCallback(
                    (A) => {
                        s.addAttachment(A, u), g({});
                    },
                    [s],
                ),
                f = r.useCallback(
                    async (A) => {
                        try {
                            c(A), C(void 0);
                            let t = await s.saveProductWithAttachments(A);
                            return null != t && i({ editSkuId: t.id, onFileSizeError: n }), g({}), t;
                        } catch (A) {
                            C(A instanceof An.LG ? A : new An.LG(A));
                        } finally {
                            c(void 0);
                        }
                    },
                    [s, n],
                ),
                U = r.useCallback(() => {
                    s.cancelUnusedUploads(), g({});
                }, [s]);
            r.useEffect(
                () => () => {
                    s.cancelUnusedUploads();
                },
                [s],
            );
            let { uploads: V } = s,
                v = !V.every((A) => s.existingAttachmentIds.has(A.id)) || V.length !== s.existingAttachmentIds.size;
            return {
                addAttachment: h,
                cancelUnusedUploads: U,
                deleteAttachment: p,
                fileUploadProgresses: d,
                uploads: V,
                saveProductWithAttachments: f,
                isSaving: null != q,
                changesSaving: q,
                saveError: m,
                hasUnsavedAttachmentChanges: v,
                canAttachFiles: V.length < s.target.getMaxAttachmentsCount(),
                canAttachArchives: l?.features.has(S.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE) ?? !1,
            };
        })(e, l);
    return (0, n.jsx)(AC.Provider, { value: a, children: t });
}
let Af = [
    {
        name: "cool-frog",
        alt: "A cool frog",
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAF8CAYAAAAD/0n4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAEAnSURBVHgB7d0HnGR1nff776lcXZ27p6dnuicxMwzDDCBJJKgYwICowIUXXDFwH9Hd1TWuL9PuGtaw6q4bvLv3UdH1kWfV3XUNGB5REV0VcRFEJMkAwwyTerqnp2N1V1c495xT6ZxT1dPV3dXDGf28XxRdVSdU4lV86/dPxrU3TpgCAAAAgsEMCQAAAAgQAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAjjhZGaG9eCv/0ZHDt+tZTOkQqygfFtO+WTeuQ0AeGpFBAAnmHhylYYO/ET3/eqDam0/SVu2/z9as+4SdXRtX/DYfCqvmS2zSm9LKzOYUXZVVoVEobLdyBuKHIko/mRcLb9rUfLxhKKjUckUAOA4Ma69cYKvXQAnnCd2fUV3/vh1lduRSIv61j5TGzZfo/7B5yqe6KlsM8OmMgMZTTxjUukdaeXacw0/Tmg2pJaHWtR+R7uSjyVkmJRYAWCFmQRUACek2ZnD+u5/nKu5zNGabcnUWq1e+2yrsnqD2k89U0cvGdfkuVNW2lz6152RNdR6b6t6vtWjyGRYAIAVY4Z3nv3u9wsATjCRaIumJp7Q0ZF7a7blspMaG71fj//uZj2252ZlVqcV6WpVuLtThrHECqiVSecG5jS9c1rx/TFFj0YFAFgZVFABnLAOH/yZfvTtFze0byjVotTTTlHvq69Q+3OfoWh/r5YqlA5pzWfWKLknIQBA09HED+DEZZoFfevLpyk9/eSijout7VPrRWep77VXK/X0M2REFt9kH54Oa81n+5UgpAJAs9HED+DEZTfXZ2aPaPjQHYs6Lj85rZkHHtXIzbdo9N++o8LElMLtrYr0dMkINTb7nhkzNbspo9R9KYUyzNgHAM1EBRXACW1yfJdu/dozlcultRxGNKrWZ5yh7mteqM4XP1vR1Y11AUj9NqX+f1nN6H4AaB6a+AGc6Ezd9v0Xa3jPz9Uskb5etV90lnpf9XK1XXyujEjkWA+vgX9eq+SjSQEAmsJkon4AJ7SpM6fV+cyrNfyq5gXU3OERjX7t+2q/5xF968Hf6keRtH6QG9PDhbTy/p2twunYs8YDE1ALkYJyPTllu3PO6lh2VwRjznDmc42MRxUZDSsyFWHhAQCBRkAFcMKyV4Q6fNWwWrNnKja4WnP7htQsoVBIH/3oR7Um2apXqFVXRXr1SGFG380d1U+ssDqqnMrrT9mT/2d7sooeeWqmniq0FDSzaVYT501objDjrJZViNUmUKNgyJg1FDsUU+tvUmq7p03hKeZ0BRA8DJICcELKduZ06IZDynfmFUrElZ+Y0uRP71azXHjhhfrrv/5rhcPFABcxDK0OxXRRpF0vinRqeyGuaTOvA4WMzJBVobSqlC27WnQ8mVFTY88e1+HrDmviwgllV2dVSBZkzpc5jeIxua6c0ttnNHn2pH2X4nvj9KEFECj0QQVwwsknrGD4RweV2ZCp3JfZc0D3n3WFzMyclqulpUU//elPddZZZy2471AmrX+bPaSfjswq/Hdrreb0la9ImiFTU2dO6ciLrTpud+PLts4n8URcq//36qesAgwAPiZzowA4oZiGqdHLjnrCqS2+Ya3aLz5PzXD99dc3FE5tq+MtelPHSfpfG7bqra8xdNbp00rGlx8a55OzK8evGdLQK4abEk5tsxszzjmzvdlFHWcW8spmJzSbPqxsZlwA0CxUUAGcUKZPTevgaw9Z3161X10TP/5v7brqTVYVNaOlam1t1Z49e9Td3a2l2r9/Snf/ZlJf+NJjiiZ2KBRqTnf/udVzOnTDkPN3JcT3xTXwqbUKzVVrFy1JqbsrVLx0Gvr+rf+p+397h2amD2gmfUCZ2VHNWZczzvuQTtp2vQCgCRjFD+DEYY9MH75quG44tbU98xy17Nii6Xse0FLZA6OWE05tAwOtGh/fq5//4CpNpWPatPU6DW58qTq6lx5W0yfPaOhVQ84AqGYozMwqd2RMubEJPXvn0zQYSarvpJjWvT2s/nRSPV2GFUoNK6BW+6b+8pe/1Nvf8HpNT097zhWPd2nN4PMFAM1CQAVwQihETB15yZFjNmsb4ZD63/YaPXb9O7QU55xzjq699lot19zcnD7+8Y/r8OHDzu0Hfv0J/e63/6TuVWdr/eYrNbjhMsWTfTKMxnpZzWydbSicGqYp622SOZNRemxceSt8Zg+NaG6/VXXdd8iZ5cC+ZA8eVm580tpvVq+85lr94z9dpUhpMJg21T93oVDQ+9///ppwauvpe7oSLX0CgGYhoAI4IaR3TDsDgxbScckFSu7cqpn7d2kxIpGI3vGOd6i3t7EVpI7lZz/7mW6++WbPffZKV4cP/tS53H/3R7Wq/xlWk/ir1T/wXBmh+QdWZdZldPBVh1QohVPTCoq54aNW8Bx2gufVz71Eg7GU+sNx9YWi6g3H9NH3/7lu/qdPL9jVoa+vT+9629ur4fQYbr31Vn3ve9+ru23D5qsaDtsA0AgCKoDAyyfzGrlypKF9Q6kW9b/l1dr92j/XYlx66aV6+ctfruWyK41vfetbnb/zmZ05rCd33+JcksnV2rTtlVq36WVKpgY0lxm1KrBjSk/u18zsQR2ee0Szb7aqn3sPKHNgWLmhERVmi8Hz6quv1keufrPn3Pfee69u+fwXG+qH+/rXv14nn3zygvul02m95z3vqbstEmnV4ElXCACaiYAKIPCOvmBMufbG+152X3WpDn78Js0+8kRD+ycSCX3sYx9TLBbTct1000267777Gt5/ZmZID977N3r4t59SNNqmfD6jvFVtNc3S672j/nEdHR1Ok7ub3bXA7kM7NjamhWzZskV/9md/pkb88z//87yvacOWKxW2qrcA0Ey0yQAItMxARhPnLW4KIyMaVf/bbpARaWxOUruSuHPnTi3XyMiIE3SXomAF08zsiHLZyWo4PYY//uM/1qmnnuq578c//rG++tWvLnis3Z3hwx/+sNrb2xfc9/HHH9ff/u3f1q0Ih0Ixq3l/+X12AcCPgAogsMywqZGXHVEhsfjZ8HquvUwtp29bcL/BwUG97W1vUzPYA6PsQLfStm7d6vSXdcvn83rzm998zK4FZc9//vN15ZVXqhF2OD106FDdbV09p6u3/+kCgGYjoAIIrPT2tGY2z2hJrOrp2vf8kfUtN/8SnqFQSO985zu1fv16LZfd9/PTn/60jge7P6h/KqzPfvazevjhhxc81p7n9b3vfa9TRV2I/ZrsLgvz2bTteqeKCgDNRkAFEEj2cp4jl40u+VvKjqVtF5+nnqtfOO8+9mpRr3vd69QMdpP5xMSEVtoZZ5yhV73qVZ77hoeHneptI6655hpddNFFC+6XyWT0rne9y+nXWk8ytdYZ2AUAK4GACiCQJi6YULZ/eSsmGYmY1n7gTQp3tNVss6undvN1MwZGfetb32qo7+dy2c/5U5/6lPPXzR4YtXv37gWP7+zsdPZtxNe//nXddttt825ft/Gliid6BAArgYAKIHAK8YLGL1x+NdKuosYH+51pp/zsKaUaqSQuxO7z2Wj1crnsyukFF1zguc9uhv/c5z7X0PF2dwZ77tOF2IO9PvGJTyiXq78ogt2sv23nnwgAVgoBFUDgTJ45pblS9dQ9PGrBoVJG/f6mfW98hVLnVEfp26PXP/CBD9RUIpfi29/+tjMx/0qzg6XddzTsm1Tfrog20rXAnu/0T/6ksVD5la98Rffcc8+829ed9DKl2jcKAFYKARVAoORb8zp6yVGZpulcVPzHuRgLHWzWj7DhZELr/+E9CrelnNv2FE3NmFZqamrKCY3Hgx0u7blL3b7xjW/o3//93xc81g7idkW0kWmljh49qne/+93HOFdM2097iwBgJTFRP4CnnGmYynXlnMrp+NMnlO3MOmHUzptG+Yp1Tzl+egql9g1z4WmoUmds18AH3yTjH77sTMfUDHZ/0Pvvv18r7ZRTTnFWp3KbnJzUX/3VXzV0/OWXX66XvOQlDe1rh1M7eM9n/ear1NGzQwCwkgioAJ5S+Za8xi4a19GLxlRoqc7hWc6cdhW1GEgr8bScV4sV1QXCaaXyap1k1Q1X6YozL9SaNWu0XI888shx6XtqD+Kyg6i/+nnzzTcfsxm+rDwpfyPdGezz/eu//uu822PxLp1y+p9abyWNbwBWFgEVwFOikCjo6AVjTjDNt9krJxnVNFmpnJbudmdQq9pqlO40Syn1WE3/nmJrJKzvPm2NrkiP6dSWTi1Ho0uKLtell17qDOhy27dvn9OHthFvf/vbtWPHwhVPezope/L/Y1VPN269Tp3dy+8aAQAL4WcwgOPKnt90cseU9rzxSQ2/8IhyrXkVu5qWepqaxb+l7qfVDqiVE6jUP7V8Q9V9j/nAxT3mIiG9P79PB7NLXADA8pOf/ERf+tKX1HRWKm979rlKnlrsa9rR0eE0ufsn1beXUz18+PCCp9u0aVPDA6O++c1vOkulzifVOqidZ71LAHA8UEEFcNxk+jM6/KIRpbfNOP1OPSOfytVSOUXS0r9UrJKWtheb6qvnK4dUw6hWVA1j4QFVu0M5vTuzR58yNqktEtdipNNpve9975t3AvulMmJRrf6jazXwvj/V3P5DeviSG3TNS6+smVbKXi3qM5/5TEPnfMtb3tLQKln2dFL26lTzLZNqD4w64+l/ZTXxL6/qDACNIqACWHF21fTIs49q5LlHZEZL7ffuZnybqynfLDfzF2+VthvViqoqdxX3KB1oGHZl1XWUUZN/Kx4IZfTO3D59KLxe3UZUjbKnYLIrqM0UG1itjZ/+oNovLq5rHz9pnU659fN607rzPPvZAdJuhm8kHJ9//vl67Wtfq0Z86EMf0qOPPjrv9sGNl2uQVaMAHEc08QNYUXPdWe19zX4NP/+ICpFS03ylGX+epnxXa3/lbtP0dEY1qqepMP0nMmsO8+x8V35S70nv1oiZVSOGhoac5vVmMUKGOi+/WNu+/7lKOC2Lb1mvjyXH9WQhU7nvlltu0fe///0Fz2sPiLL7qLa0tCy4765du/TZz3523u3JrgGdft5fWuekngHg+CGgAlgZVoIcP31Sj79xr6a2pJ0qqpvpvlbpg6q6fU7l7mNaSpzl/f1V1UograRX0/UY/udo6G6l9cap32lPA31Sb7rpJmf0fjPENg1o000f1uabP6H4hoG6+zxcSOvtmcedAG1Pxv/BD36woerpZZddpksuuUSN+OQnP6kDBw7U32gF3Q0ffqdaVm0QABxPxrU3Tiw4tgAAFqMQLWjosmGNnjNW+hlcbVx3z2FaGajvbusv7WC4d3Lzj9o3DN/tmt095y1frcyxWpI0Q3p7pF+Xx1cpVGdFKrsJfPv27fMu/9moUFtK/W94hVa/9dUKp+pUOOvM6zoYimvbl3+sT9z4xnn7iZa1trbqjjvu0GmnnaaF2PvZQdbuV1vP4EffpsHrbtD6v1mnUIZ6BoDjxqTNBkBTZdtz2v9/HdT05mLoKQbB8oCo4hym5cFOlRb90lynxbFR1cqoYRiePqrlDZX4ZhT3N93h0/eT26wcZ5bCreGaY7UaUmeMgj6cP6ifT43rba0b1G/EKuewQ6G9YtRywmmkq12dL3ueVv/RdUqcutlq3p8n8Jm+TrbW7X1WM//ui09Wx0su1tFbfnTMx3nDG97Q0CpZ9mv6i7/4i7rh1O560PPKl6vvxqsVGjcEAMcbFVQATTPXldWeV+5Tpq/UDO2rlhavLLZCWgyV/n08Nw3XFddoKKPOvtX9De/juY7ryhu6IrFa10dXqc0I6wc/+IGzEtNSRu7H1vWr+4pLtOq1VzuDn5YjNzapoX/8og5+/Ka62+2lUO+66y51di482t5eJvWKK66ou63r5c/XSZ//iDOzQOxATIN/N6BQjgoqgOOGCiqA5pjekNaT1xx0KqjlsOeuZppGeWBTceIo01VG9QRJV4W03PJvlk5YrbKWdygdUnk80/NglWqtavc3PL1gXVNZWVePhk19PntI/zs7pBeFOvWdW76ifEvCns1eC7Grj7FN69T+7HPVcelF6njxs+avli5SpLNNA3/5BrWcvk1PvvuTmnvyoGe7XeVtJJzak/Hb1dN6el9zhTb8/XudRQ1sRs6o/YEAACuMCiqAZZs6Ka291+xXPpUv3VNb8TTqXZd7d8N/tXi7/s6uqqlUM4eU4Tqbb3u9yq3hXrbKvX95RiyrOTx/ZExTv7pfMw8+psyefcqPjCk/nZYRjSrS3aH4xkEltqxT8oztivb3KtLRppWU2b1PBz7yPzX6tR/KzGSc+VJvv/12Z2nUhdgzEbzrXd5J90Ptrer/0+vV/6ZXKuTqG2sUrOb+73Sr4/YO6wcAQRXAcWESUAEsS3pwVruvf9KqMOY99xv+JFgnINZWN42afeqfs3pHvQqpPI9ROqfVbB89lFJsKKnIWEKhTNhZLCDfntXcuknNrZ+yUpp57Od8vHgGSpUTcy07OE/c/kuN/d0X9W9/+RE95znP0UIef/xxnX322Z5lWhNbNmj937xT7c8/v/7TsUJqywMtWv3lPoVmaOoHsOIIqACWLj1QDKe5Ujj1Vz/lum24Eqmn2GnUFkA9/VTr9SEt/at6nFFTpS2LHUwp9UCvko90KDQ7f6+mQktO02cNW5cRmfFczYMbzUqp8+fNefZd+ACjYOoMI6kbkwPaEbJerzF/iLzhhhv0hS98wbmeOGmd+t7wCvVcf7nCrSnPAK3Ke+sKy9GRqPo/36/4wYWrtACwDARUAEuT6Z7T7lfsU6bH7pdp6liDn7zTOrk3qG4F1D2gqtLiPk9ANNz/ch0fOZpQxx1rFN9tBdNs41W/fGdGoy99QtnV6drzV59WIIWs57g+FNd54VadaV025SLqisYVcZ6woYce3aVLrr5S8bNOVceLnqnW8890ZhdYjPBkWL1f61Xrb1I0+QNYKQRUAIuXT+b1+HVPanp9cXJ7d6CsXK25Ut6lfqdQf1D1Hm/U3afOw1pN+SG13rfKCqdrZWSX1hxdSOY0dtkezW6a8AXk4IdUt5BVWbVnIUhaF/sJH82klYmGl/3kjayhnm/3qPOnHY1XgwGgcSadiQAsSiFs6skXHtL0uhnPKk/+5UgrazhVNhaVlzf1H+zZrXqa6qpQpuleF6qyn/thQzMR9X5rszp/MrjkcGqzz9P5nQ2KHkx5nofpejHzLqH6lKuGz0LI0LhR0CFldcicUyYWWV44LR1biJoaefmIhq8adpavBYBmI6ACWJSRc0c1tnPCGzzrBVVVt3uCqi9Ueg4u36/qdbkfonxQKeSarscIp61w+u3NSjyxuCbr+dghteu7651plmqXUq2+GNdTCkhgLT2Jlajwll5guZg8fuGEhq8ZdlYOA4BmIqACaNjsqowOPHfYGf1ucwfEyh2mK0yWS6GmZ3OdwKfqvqUTmGY12NZUYV0H2tdDs2H1/J+TFN/fqmaKjCaUfKBH7hztDtKuZ+N5PStmMaHTbOiuBh7z2A86ee6khq8eIaQCaCoCKoCGFCIF7bn8gNXEX/CURD3V0TJ/RdWTOKsh1awTVE13gnXv7zrGqG6yKpxS920blNi3MvOOtt69ylmH3pdPqy+pToo2Td++S1InGC4z/C6pqNpA4rZD6qEbhgipAJqGgAqgIcPnHFV6zawnMJp1gmrdpv9KPq0GT885VC+suiKhK99WH7d4ve2+PrU81qWVYldRw0cS9aun3hwtT6nV9dqXxn1g8EdkpbenNfSKw4RUAE1BQAWwoNnuOR26cKTStO8JmOV/+TqZmvVKiKXgaXrKj66qqG9/bzO66c59ziWcjqrjv9cuu7K4kNhQi0x/8FTty66EdKm2orqs57hCL/BYzfdWzjQyYekYU0n5n9X0GdM68vJRBk4BWLaIAGABhy4aVi6RKyWS0qT4BVUKe+UMU8mvlT6qxQFG9aacKkcYw0luRuXU5SBXzk6eYGed1z33ZuedaxWaC2ulRUoVVLOUoo3Kk5O3uFm+bVaDu2FUXmn1tUlPUVG03DmipE5qDs2E1faDQSUe7SjOhBA2NTcwpZmdR5XZPOEsaOA+m9/4BeOStcuqb/Su+A8HAL+/CKgAjmm2N6PRU8e9YcypglaXcqoG09Iu7sqnUQqqKu3nzkiVAfJmdXtp38ouNQGwWMuMjSdWtGnfLeRUEl1Pwz2a3TSqm0qvzR3Iq31mzcpcqu7FoRqf9ckXLo+1p2FUnqPXAsdbmzv+z3rFd3VU78sbiu1tcy75jjmlzxrRzJkjyltN+fM99fGLxhUbtqrbP+sQACwFTfwA5mclkANW9bQQMl0Dm9yN+9X+oapsr26tnMQ1N6pMyd9HVXIfUz2vc8tUbf9P62KH0/Ds8fmNbbpev3yv1TM7q/eP/P1QvbMVVO9rrPm/sXC6uD29QtNRRZ+Yf7BZeDymttvXquvmkxV/snX+B7L+z3Lk8lGlT54RACwFARXAvKZXz2hsy2RN6Kyd+sn03Pb0yzTNap9MZ/5Sc/6gaso7oKrUobOyuXTFbuZvfaRHx8v07oc09bO7NfvYXhWm0/WDqieRyhtU3ZvMYwRVz6Muow/Aoju8lircVrW0kWVho8MJdX95i9pvG3BmOKinECto6JVDynZnBQCLRRM/gHkd2THuNOWWOc3Vvn6khqt8ahquZn+5qoiSr69mMaQWm6Ln6ZNpqtS31ax0ISg3j8eOJBUZj+t4GfqPL2rvez8nI5lQuKNN0TWrFN+yQfGNA4qftE7xrRsVs+4LtbYolGpxfvobri4QpZdT7f7g7mtbTrKl967ydhmLDZnLUapdh00nWIbmGqhd2FXsu1cpeqhFR6/YrUIqV7NLvjWvw9cOa81n+hXKUQ8B0DgCKoC6slbgGN0+5lQ8nexkVvuG+ruFSr6eo+XA5d7PF1TL/TIrt0zXuQ3XyT05r5haoyOJ4xd4rAe+7n1X6j8/cpd2/fJep4KaPTCk9N33e3YLtaUU7e9VpLdb0YHVim+yguuGNYpvLgbZaP8qmSHD20fXFVRlmq63rDSgynC/1433QV0qM55Xviuj0FCy4WOi+1Pq/soWjb38CeV6Zmu2z2yZ1ZGXjmrV13oFAI0ioAKoa3Iw7YRUW7lJupobXeHTVy2txih3mDKq4aucYd2Dq1wjhopVWdUMuDIrj2UqPpLS8dLRM6enXXqyzn3JV3Xbv/yHvvmJz2r/7x6v2a8wOa2Mfdm1p+55jFhUsfVrrYsVWjcOKm79jVq34wN9Cnd3OME20tVuJd1QsarqqqgWr5qLa/QvJ313c79hHLP537Sq5bNbxxVdREC1RawfDJ1f36ijV+12Aq73eZjOoKnUAy1q+V2LAKARxrU3ThzPdiQAJ4hHrtqrsS0T1Ts8lU9VRqS77/SPSPc23Zf6OfpTlv+8rgPrNf3bx/d/b6tSTxyfEfzbzxvTM150pHJ78siYbv2f/6pv/f3nNTU6ruUywlYgjced7gHhloRiVniNDa5WbF2/dbECrVWNdSqz3Z0KpRLOPopEfJVV2/K+ysvvvT0Qqvem7TJyi4rDDruCOnr9LhUS+cp95RkFoiNRDfzjgCKTKz8tGIATnklABVCjEDZ195sfVCFa/HqoBEVfs3O5H2lZvSmTakOm4Qml3h19Vw2j7nnWfmebWvYdnymMrnzjXnX01g70ObBrt7799/+iH3z2KyrkV371pHB7m6KruhS2qqx2WHUC7GB/sRK7ps8Ksn1O14JQYvl9c9tvHVTLvUtrkk+fNqrJFzzp9Gf16/ivDq36Ok39ABZk0sQPoMb4pkkVIoVKu7p/nJPpHvxjmq5mfaPaiuxq+jdMXz/SMv+Iq9KDVEe+m56KaqW5P3R8fldvPm2ybji1rd26Sa/7pw/qsj99jf7XOz6qu797u1ZSfmLSuSwk3Nmu2Fo7rPYpPlgMsZHVvVaItS6ruhXp7FC4o9UJukYoVLfZf/rCISUesSq26cX/L6Llt93Krrcn9h+t3ln6nCeeMaHW+1NK7lpcFwIAf3gIqABqTAxO+wbpFDuFmu6J6OsEStOsHfRUvuk+pNLF0vQNuXL1S3Wfuxhwq30I8onaEePNFk8WdPqzxhbcb+CUk/Sub35aP/+37+iWT35Oj99THDwVscJfeyyl1lhSq1OdWpPq0erWTnXGW537WiLeSudsfk4z2YyOzk7pyMyEDqfHtHdiWFNzM5qYS2s2N6dG5McmNGNfHny0ZpsRjTgVVmc2AuuvPRuBE1z7eqyK7BqnH2zMuh3p75Vx0qx67z9bS5H6RZ8yW8arTf2l1bfMmKmRl41o8O8GnSmtAGA+BFQAHnZ1cmpNaYJ1J5eWa6PVIfWmrzpaUSrGGb4OqaZZv/m/eH811Bq+vOoeUOXsUZqTaq4nrZW27YJRda5qLBSGrDD6zOsu19MuvUj3fPNH2va9wzo7tV5rWnusYNqlaHhpX7UF6/WOWGF1aPqoFVaH9MDwXv1m+DHduf9h7RkfUt5cXNcCM5tT3rpoctpejVSZvQfm3TeSbNOpz/uk1p/5Wi1WZDShlnt6NXXBUPWxSz9eMgNzmjjXqkzf2S4AmA99UAF45Kyq129u2KVsqtS0XQ6M9fqIlpv0Vb8/ab1BUpVb/vP5TlBzXlcojo8lte4bOxTKrsyAm/TGMZ111UGd3xbTUkRnC9r60zFtumtC8em8VsJwelx3HnhYtz5+t+48+JAeGt6jdC6jZgpFEnrZX1r/LWQHtVi5joyOvP5h5weOf+nV6JGoBj85oHCaAVMA6jLDO89+9/sFACWZjjkdOGekbjD1MLxBtV4orTcyv945qn1Y/ZXW+iP/88mcM9WUHVSbLdM3rcMveEzrWw1tjEa1FIWIoeHNSe07rVXROVOtR+YUanJOTUUT2tY9qBdvPlev3nmJrt/5PG3uXOuUpYfSY5rLL38Fp4Ftm/SG/+86jRxIanpicVXgUCaijN2Xub32eRRaCopMhZV4IiEAqIeACsDDbt4f2X7UdU/9kOjevFBQ9Vz1bag7NVX9gzz7Zrtn1P7IKhmF5vVltLsOHH7hY8pZ1eMNVjjdFFtaQC3LJUI6uD2lQyennKpqx1BjXQYWKxIKqyvRpvPWnqL/e8dzde2pz9aO3o06PH1U+6eOaCnsAVT/4x/+QlvOOVmDW2d0+Mmk0osMqfnOjLLrpstn9GzLrsqp/RdtTf38APz+IKAC8BhfP6WjVuXLExxLobJ+eKzenjeo1jnGqNP0P18Idu9bHnRuV1FzyaxST3b6n9mSTJ00qiE7nLZknbOti0S0Ob68gFqWaQvrwM5WHdrWosR0QamjOa3USqZ2c7odVs/u36r/ccYLdfUpz9SsVU09NDWqqexsw+fZcs5pesWH3qZILKZovKBNO6Y0MRrVhNU8X15VbCF29TSztf5csU4VdTKixF6qqABqEVABeIxunnBG8ZcZnqZ+o3pV7vu9tz17GccIqZ4HqfY4rTufap1Am+2ZcfrKJofarCb0pS19mrcC6ejZBzR63j4VovnKA62LRrSlSQG1bLY9ov2npTRkBdXkeH5Fg6rNDqt9qU69bOv5umb7s9STbNcDw3s0vUBQjSbiuvH//YDW7zy5cl84YmrjqdNWWDW1f1/ceuMWfr9z/WkroE7Muz3fkVf7nVYVtcHAC+APBwEVgMfolglNrknXhEpPQdUwagYwyXfdNyTKM8jJl0d9tw3vqep1AXDdN9szrfTguMKZiOJjjS+laYYLmtg+rKGLdyu9fqwysXz51Out5v1mB9TiAxhOUN13equObEwqOpNX28jy+4supCOe0rPWWVXRHc+1Kqyt+vXQY/NOXXXOiy/W1X/+Rs8iDKWnrt51sxrfNqZD04bCo4ljhsv0WSPKrZ4pHVu7X74tr5ZHWxQdZUIZAF4EVAAedkCd6itNM2XUjqKvYdRpYPdNPVUTVmuu1ZxS/qRbp8dBJdTmrOb+SauJfnLziLOevLO5EJKRD1Wa/+3R5Hbf0tk1kxo7/aCGL9yjqS2jKsTrjF6yDtkQsyuoSxvF3xDrRU53R7XvjLbj0vRf1hZrcYLqG896qTPH6uNjBz2j/1NdHfrz735eybZU3ePtd3N1i6m7toxoygqqxlxIoZlwzYwK6TNGlD7/sBbqfWF/PqkHUgIAN6aZAuDxyAv3atgZJFXbFu+MuDfqTCsl1QZVf6I06zTTzzOgynufMX84rnus4Qy8CVuBKTwXUShjBSfrn3wsp0IsL9O+GGZtv1rfA1yUSuhF7ccvONlzvHYeyGjTnZMafGBSkczx+Wr+1cFd+tAdX9K3Hv2FjEhYb/7iJ3XhNS9e8Lg7rerr7dlisLXf48hwUpEjcfuFKNebUdb6kWNGFp6nNTQd1vqPDTr9UQGgxCSgAvB45AV7ddgOqP6+pKoGzHJA9Q6kMjwz8tcLneUN/hqqp59rnfTrrqiWA7I78NZ/LKP2fkO1IdqsNj9Xuh9YntOa1PPbGu8y0Ezth7Ma/M2kttwxpsjcyn9F5wp5ffH+H+qu56T0vLe80ll4YCGz1mf9BasCe7Sw/Pmz1ny+X6nfUkUFUGHykxWAR2iuFE7KS5XaE62XtrlHb5eXPa3eYZb6kprlw1UTcQ35lkAtntssJ8PKmqneY8xSIjUq//aqt6JVaXFUTwB1P7bhev6VSeRLz6Fuhfg4muiL6sFLuvW7Z3dq/b1T2nD3hLqs6qqxuIWjGmZPU3XxjVer+0U9KoQaG2yWsN6rCyJRfWeuFFDLP1Dk/w9jYZNnTRFQAXgQUAF4ROZKfQldGaO6GGm1aby85GnpVnG/Uj4xPEe6qpN1ljL1LGPqXDG8hVTXMWb5OVQez/cEXOf1BtzaGQLM6ouq7mvdWT5lzHgqI2pRPhbS7qe3a++Zrerem9HgfVNa89C04ul80/qqmmFDu87vcAKxvcDAYmwJRdRhhDRuv5mm69fFMdUG2Mz6WeuxCwrlljYTA4DfPwRUAB6RmbA7kXqUQ6Zdm6xWIA0n1BmunUp3l0JUOfQZ1YqmXOcvVzFdQbVcffWeR65qajloVg+u7Ot6rnI/Xukk5VBrGLXP17WbogEIqGX5aMhZmcq+PPj8bnXvmy2G1Yenl9UFYKIvpvtf2K2hk1NaykxPLdZ7dF4kph/kMjJrnsZ8ldTa+3Ltec0NZJXYExcA2AioADzik7FixdGuZPqzhLcVvtR8blYDYnk3X1N+pYbqCqo1ech0/TFcldJS+vU347vPUQ3MtUG1sm/lyZSDqrxTH/mCclC/HO1J/+3VqexLKGeq79G0+h6bUde+jNpG5hSbKRyziGlXSY+ujVtV2TbtOatt0VVTvx2RiP7LCqjFmVXdobTx4GxGTM2eNEtABVBBQAXgEZ8szf1ZrmS6Bz3VyRyV/qFGZS9fldPbNbEcPM1SoPQ05/urms59ZiU1uqt8NfU5sziVlFHufiDfcygf4+5uanojtHs+1kQoOBXU+djh8tApKediFEwnnKZGs2odyaplPKfYdEHhXEE5qwI7lwppqjeqsTVxpTsjMpv0+hLWm3Wy1dR/X96ey3XxzftlmXV2xO0QANgIqAA84lMxGVkrRkYrI4iKf2R4p5jyZrtSKKwTVI3597fDZ3mAVKXKWac/qVmqvhqlfV1Py90l1rtvaaun6dldMDVdzfzl3q1mNaTGA9TE3wg7cGZSYecyuu74Lh96ZiSqB/M5ZUu/DOZ/6+YPsJn+OQFAGT3SAXiE50JOSHWPeylXSZ2Ko7spvnzF9FUoTdO7oXqrcl7TfZLSnZVDPQ9QvV3czf3EqueU6T22eL/7zjqndD9W6STl19gS4uuxUWtCYfW4fr2UP+vFmFuddZr6AcDGNzAAD3sUf8uRRCVEmqa/ed+sBD/Te7c7N7pyoVltSjdd4cWUfFnTk14rAbZOUC3u6kql9XJNwf1cqsHT/boqDylv0LUlDb4eG2X/97E9HPW9md7P13tAnRJryFSuKycAsPENDKBGx4HSnJSuIqi7+llRL4G4Qp7pDimm62TyZkrTF0SdrgIyPWHWs70muFZDsFkv1Kpc3fUG2nrZ1r5tL3Aa5dtxUU4OR7zvseudNf2fed3UKmUJqABK+AoGUKPjYEruCfd9ua42UJqugChXqHT9Nd0bCt5qplznLe9XcD1wvQqnfM+rWoH1hWlXNa/6ekxXBbYm/yoZDilyYnVBfcp1hAz1h4pz6Fbef9c7u1DB25bvIKACKCKgAqiRGmlRZDZSWw2rCXreYpjpajf3hFR5j3Hd8oQW07eP6U/E7vO6U6X7Kfqesyd8+p+P6XpRrtdir5IUOcEGST3V7PrpZquK6v9cKv2Gff/xeINq8b3Ox1doqSwAJxwCKoAaobyhnj3tlUmBPCFDtQHSE1TdIdUdIMt/TXlDpr8fgbzHmO79Sxu8VVPvvt5dq0+spgrrf+6lDfafOAF1SdaFixPD1PsRUf0cfT94qkfIJKACKCGgAqir+4l2q53dG9JMV9nUE1LrXS/9uxxuvYOh5BmsVAnA7oFMpieT+qqg1YpcTVA1feeX99zuc/mfb/l5tFtN/MTTxVsfDivqWtrW9fbWvM/yV9BNe15XUwBgI6ACqKt7b7ti03WabMs7+JvR/QHEl0zKg548zDo3PR1HfSHVF2wrz6PUp7Tu+T2htM553ecq6Qjz1bgUdg/U1fb0XL4+G54quOvHTDmoVj45CqgASvgWBlCXPd1U5/622lKYPyS6m9FNzVtRLRSqO3jyoCfMuiuZ5QdT3YqqzNqnVt5Uc6f7eZvFSOQeUGV4X4a6o2Fhaew5UT0/BlxXK5+X778Ro/ShGQXq1gCKCKgA5jX421VWaFCdqqj82UM1/T3docQdWEtXTFfZcr5QWQmTvuZguZ+PJzx7q6mmqWOG1fIV93Ox71oVIaAuVb/VzG9XQj0/Mtz/sah61f1jxL6E0/wvCUAR3wYA5tU6klTboVQl6dWEPnd29IVESb6m+JrNqk6gXy+5VG/7w447pNZ5WM8d1QCt+gHYc4LiLl0E1CXrC4WqA8xMefoYm+4yqlTzgyc0zfsOoIiACmBedpPr4AO9zvVqQKwtWpbVFizNyj41xbSasFgMMJ67faHSnGeDN/T69vV3K5gvqKoYwe2I1B3hq3GpWq1wGi8ve2rz/9jw/6JxZdbIeEQAYONbGMAxrXqs26qkthRvlCphlYqqO2TUVFRNbx9Vs3bCfdN9nHwbVSfYeipy7gdWdX/Td/7y2SpN/8eeS7XLCqchpphaspRdQS34pgKT5vkMvR9U7EhUAGAjoAI4JnsAy/p7+4r9Ct0bqsmvWvc0fdvlzX/1mv8rQcb0X6rhpSbklG9WwmhtRbW8u1G64j2H6T9VxeooVbzlsN/vdmcWhOKHU5lLt7yD70dB+bOy+5+GaeIHUEJABbCg3t2daj3S4q2AlbaZrrKoOyu6q5Q1udU0a9Nh6bzlEfXebb6VqcyaQz19VIvVXdfzk+pWVFXpA1s9dE2MgLpcKU8f1Oob73qba35oRIej9X8xAPiDREAFsKBwPqQtd651Ju53BwzTX4b0pEHJ33zuDq+mq63XPYdpwR2CPSGm1Dzvftw65zfdpTrTVO3gKdWGZtdzGIzRzLxcLUbI0z2j+F6bnh8mvt8TSj6REACUEVABNKTrYJt697Z7AoareOoKJNW+p5XK5nyBUu5qWjUyenZ1VVZrDpZqq62uY9znrRdUTW9mkh1Nu6J8LS5XvNyuL++PGW9QNT0/FJJ7kgKAMr6JATTEHtG/+a4BhXKqSXa+omVtM7p80z35eO53dSB1V2g9AdNUqZpqytOf1BeEq+G5usGsE0zLV5JhQz1M0r9sERk1n0e5L3CZWfoMnX6qsyHFD8YEAGUEVAANS40mtPGeNU5Tf5G3EuYJfP4KaSkklpvpnfsKrn0rQdIXKOUNp/UqppXn4KuQ1gQi07fB9RztbWut5v1EiK/FZfP9cKh8/Kr/WcYPRRU7QkAFUMU3MYBF2Xhfv7r3t3mDhqvZtqYyWTc0zlNRNVXTtO9Onv6QU9PnVNWprzx3ux/CdV73ACknoMYZINVUrg/J/9vAvUvrg62qV1kH8IeLgApgUeym/m2/WKdItvj1UQ2IhquPoWr7kWq+iurClc/qSVznrlMdrQZYX1ieJxj5H3BjkgFSzeAUxk3/W+79UVJ+/42cobaHUwIANwIqgEVrGUvo5DvWOXOkViuQ7mZ2X5iU5GtZr15xVUc9QdN9bs/N6olqwq1UW1X1BFdpvqb/ZMjQ+jjNzM2Q8fUjrl7KPxzMynRiLbuTio3wvgPwIqACWJI1u3rU92hP8cY8oc8TVE1vUPV2BfCm0pq5UN3htrKbWRNu3TzV1FK/V8/6UL79+2JhtYZZQaoZ0gXTXfAu8r3/5a4Ynfe0y8jzvgPwIqACWBLDNLT9jkG1H07N2+fU00dV3qDqy6/V/c3y/qrTz9T7MKavNOvf13tcaa5T09VP1VVR3ZSMscRpk0wVyqPfityfr/szCk+G1X5fmwDAj4AKYMkicxHt/MlGJSZjNcHTX/H0hEnPfd7rleDpqqpWYqNr1L+nEutqPpa8IcjUfBVW0xOmd6TiwvLZb+l4vlC/gu77MdL3gx6nTzMA+BFQASxLy3hCZ/xwsyKZcDWUljfWhMLy3a6qp2eH2qvl8GkWfMud+hg1ZzRr+pzWBtViNTUeMrSBAVJNMW19TtNOBdX346GsFFJjwzG1P0j1FEB9BFQAy9Z+pEXbf7FeoZyhmoFNroAo1amomtVlRj37m3WyqKs/qbv6KrM20Fb3d1VRfc+hbEtLXDHmP22K8UJeswWzzo8T09PVo/uXnYqkWRQBQH1M+gegKfof61Y+ZOqhC/eoECqUmuUN5x87lhjuwFJq1a2ETHs31w2zcl9pv+qpqsHWPq9puE/nUTlbZT4jwxt6XctxntXOOvDNMpzLK28XUEvvr/PZuNd1sP607I+r+54OAcB8KBkAaJqBXT3a9stBhQqh+Ufxl+72VNg8Te/VEqun8mmqTuW0VFGV5h/1X77qObB6rlQ4rE0tNO83y95MTqbrAy1/duXPwx6x33/bKoXm+N8PgPnxDQGgqdY91Ketdw1UQqq3yd2XTX1BtaaPqOn769rPs0+l6X/+yfkrIdWXZu3J+XuiNCY1y2PZrPPX/X5XfyRIXb/uUOujTMwP4Nj4VgbQdBseWO2sNPXQ+XtVCJcrlqar2d7wNLUbrqb+4r7ljaYMz31GtalfpX+Vbrva9Ksn8wdb12OUm/7P72oRmuNoPq+RbL54o9y1w9WvIj6csKqnvQKAhVBBBbAiBh5Zpe13bFAoF5pnOqnqgJmaiqqvquq6Vbep37+LSlVbU7Uj+V0Pq95YRFtaWMWoWe6fmasdvFZ6r8OzYa39Xp8i09RFACyMgApgxQzs6tUZPz5J0Yw3lJhmbTA16wXNyv7uUGpW7qzXP7Ve8395/Lg/qO5sSygV4WuwGfLW+/ng7Fzxhu9Hhn191R09anuMpn0AjeGbGcCKWrW3U2fetkXJ8XjNZO3uSmf5tmoCpupUVCtrTVWDquu87tvVTOsNqvaqUc9b1So0x4FcTvvmspUfBI7SB9D7q06t/q8eAUCjCKgAVlzXUKvO+d7JznypZfWCqq0gc/5qqOtYVyG1eKPUMbV+c7/7mGKAelp7Ql1R5uFsll9Nzyrn6cpRfJ/bH01pzW19AoDFIKACOC6S03Gdc+vJWms1+8sTZKr72KHGqITVUo3UXwmtqaaWw+c8x8j1WKVtMat6+lyqp00zmsvrt+lM9T0uXVL7klp/y1qn/ykALAYBFcBxY/dF3fnzjdrx8w3W9XAlYdY0ycvdlO/dUC+ous+hgrds6g+4dgA+vSOpTQyOappfTM1oJu9t1k8OJXTSV9YrMsWgKACLxzcHgOPKDoiDj6xS61hSDz19ryZWpVWeLqryt6RSIbUOqq4iVbvSlFQ9rhJgpdIUVXZCNSr7tERCekEf1dNmOZzN67+nreqp0zWj+D637k/qpK8OspQpgCWjggrgKdF5uFVn/3CrNty/ulolVe1o/HLg9I7iN2uak6s7V/mntLJvn9+d0kCS6mkz5Kw39LtjU5rNFyqD1loPJLTpP9cpOsXqXACWjgoqgKdMbDaqU+5ap+5DbXr46U8q3TZrFTmNmgn7K4VVo3qfYZQro96ya2k9gNJOrj6u1vW1iYiuWMsa8M1yj1U5fXimOrVU90PtWv+dAYVZxhTAMhFQATzl+p7sVMdISo8+bb/2bzlSWX3KcDf3u/YvN/dXt1ebl6srGMmTXVPhkF6zsVshQ2gCu2n/1rFp53OwF2NYdXe31v68l3AKoCkIqAACIT4T1Y5fbNSaJ7r1kFVNneqaqUw9ZXjWN5WrwloOsr7U6e526sx5Kl050KH1DIxqitmCqS+PjGvSatoP5Qyt+2G/Vv26SwDQLARUAIHSfbBd5397u/aeMqzdOw4q05Kr9FEtNvMbnqmpDMMdVF1N/KWEat931bpOnd/DwKhmyFtv8FeGJ7Qvk1ProRZtuHWNUgeTAoBmIqACCJxQPqSND6xW/55OPbbzkPafPKxCqLoKlFFnpL/h7m/qjPQ3FbVKp5dZlVN7xSiDpv1lm7Eqpt88Oq2HJ7Jac3ev1vxylSIzjNQH0HzGtTdOmAKAgLILoVNdaT16xgEdXjcmM1T9yjLqpc5Sb4CeWFjXbezS6R0thNMmsEfsf3VkUvc/WdCGH65R5+NtAoAVYhJQAZwwxvqmnKA6tnZCOaPaP9WulpbDansspIv72nRpf5sSYQbsNMNYLq8vH5jS7I/bteZXqxgIBWClEVABnFgKoYK0YUahM8eV2zypabOgsJVNO62K6db2uDa0xNQaCVM1bYKCVTV9fCKv2++SErf1KnGUQWYAjguTPqgATiihglW9252S8URKvQNZPeM5sxo8a1bRJL+1m8nub3rnA6Z2f7ddnU8wwAzA8UUFFcAJL9Fe0MYLZrTuvFl1rM7LoAV6yeyq6SMPRPTQd1PK7k54l5MFgOODJn4Avz9CEVOrT53TuqfPao31N9bC11uj5mYNHXwgpt/9KKnxPVbjWo6UD+ApQxM/gN8fhZwVsu6LO5fWvpx6t89p8/mz6t6YE+qbnjS055cJ7f5pUukh/pcAIBj4NgLwe2nqcMS5PPGTFqV681p/zqz6T5tT1/qswlH9QctkpMMPxrXnrrgO3x9Xfo4RZQCChSZ+AH8w7C4Aqb68+rZl1X9qRj0nZZ1uAL/vI/7tBQzmZgyN7Q9rt1UtHXk4ptnRsMwCwRRAINHED+APh90FYPJAxLk8dntSiY6Cutbl1HvynBNY29fmFfo96no5O2Ho0ENWlfR3UR16IKa5ibBnmVgACCoqqABQEktZgXV9zgqrc2ofyKnNqrYmu6zQegKs5mkWpOmRsMb2RTX8SFQjj0U1vp8qKYATEhVUACibmw5p6KGYc7Gb/SOJghLtpjoGsuoYzKu9P2dd8oq35xWJS+Ho8f99X8gays1ZzzVtaHo4oqN77UvUCqYRZaYMZdOMvgdw4iOgAkAddlN4diZkXaTJobD23VPdFomZCsdNJdoKal2dV8daq9pq/Y0mC4q2mFZ4LVgX0xmMZVjVVyNkKmQXMkP20qy1j2NXP52/eUOFvJS3Q+is4YRQ+znMjIU0cTDiXKaPhJXLSDnrfprrAfy+IqACwCLl5gznkpkMafxARPt/Ha/dya7AWiE1al8SVkCNmk7F1Qh7U6XdL9YOpPZI+lymWAHNMysWgD9wBFQAWAlWDrWroPZlZlwAgEWgsxIAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAAChYAKAACAQCGgAgAAIFAIqAAAAAgUAioAAAACJSIAAAC4mcJTyfz/ASfN1PdNMkk9AAAAAElFTkSuQmCC",
    },
    {
        name: "cute-bunny",
        alt: "A cute bunny",
        data: "data:image/png;base64,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",
    },
];
var AU = e(500770),
    AV = e(990078),
    Av = e(529689),
    Ax = e(289873),
    Ab = e(939249),
    AK = e(789645),
    AF = e(626034),
    Aj = e(65593),
    AI = e(703007),
    AN = e(698638);
e(634654);
var AX = e(847761);
let AT = (0, N.Ld)();
function AW(A) {
    let { upload: t, progress: e = 0, onDeleteAttachment: l } = A,
        i = r.useCallback(() => {
            l?.(t.id);
        }, [l, t.id]),
        s = e >= 1,
        o = e < 0,
        u = s || o,
        g = t.filename ?? t.id,
        q = (0, Aq.kt)(e);
    return (0, n.jsx)(AV.m, {
        asContainer: !0,
        text: q,
        children: (0, n.jsxs)("div", {
            className: a()(AX.hC, { [AX.t]: o, [AX.ik]: !u }),
            children: [
                (0, n.jsx)(Av.D, { size: "xs", color: d.A.colors.ICON_MUTED.css }),
                (0, n.jsx)(m.h, { size: 10, horizontal: !0 }),
                (0, n.jsx)(c.E, { variant: "text-sm/normal", children: g }),
                !u && (0, n.jsx)(Ax.y, { className: AX.eD, type: Ax.y.Type.SPINNING_CIRCLE }),
                u &&
                    null != l &&
                    (0, n.jsx)(Ab.D, {
                        onClick: i,
                        "aria-label": G.intl.formatToPlainString(G.t["1o5hyW"], { attachment: g }),
                        "aria-hidden": !1,
                        className: AX.G5,
                        children: (0, n.jsx)(AK.P, {
                            size: "xxs",
                            color: "currentColor",
                            className: AX.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function AP(A) {
    let { onFileAdded: t } = A,
        {
            uploads: e,
            canAttachFiles: l,
            canAttachArchives: a,
            addAttachment: i,
            deleteAttachment: s,
            fileUploadProgresses: o,
        } = Ap(),
        d = r.useRef(!1);
    function u(A) {
        try {
            for (let t of A) i({ platform: Al.xz.WEB, file: t, origin: "unknown:guild_product_attachment" });
            d.current = !0;
        } catch {}
    }
    return (
        r.useEffect(() => {
            d.current && (t(), (d.current = !1));
        }, [t]),
        (0, n.jsxs)("div", {
            className: AX.kL,
            children: [
                (0, n.jsx)(Aj.A, {
                    className: AX.x4,
                    title: G.intl.string(G.t["5eTk2g"]),
                    description: G.intl.string(G.t.Ecxoxl),
                    icons: AN.ir,
                    onDrop: u,
                }),
                (0, n.jsxs)(AI.A, {
                    className: AX.zd,
                    innerClassName: AX._3,
                    disabled: !l,
                    "aria-label": G.intl.string(G.t["23LeCD"]),
                    "aria-describedby": AT,
                    multiple: !0,
                    onChange: function (A) {
                        null != A.currentTarget.files && u(A.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(AF.k, { size: "xs", color: "currentColor", className: AX.T8, "aria-hidden": !0 }),
                        (0, n.jsx)(c.E, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: G.intl.string(G.t["23LeCD"]),
                        }),
                    ],
                }),
                (0, n.jsx)(m.h, { size: 12 }),
                (0, n.jsx)(c.E, {
                    id: AT,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: a
                        ? G.intl.formatToPlainString(G.t.lvU6sr, { fileUploadLimit: "1 GB" })
                        : G.intl.formatToPlainString(G.t.DOXzIU, { fileUploadLimit: "1 GB" }),
                }),
                e.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: AX.me }),
                            (0, n.jsx)("ul", {
                                className: AX.$W,
                                "aria-label": G.intl.string(G.t.YZ6cTW),
                                children: e.map((A) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(AW, {
                                                upload: A,
                                                onDeleteAttachment: s,
                                                progress: o[A.id],
                                            }),
                                        },
                                        A.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        })
    );
}
function AQ(A) {
    (0, U.openModalLazy)(async () => {
        let { default: t } = await e.e("44252").then(e.bind(e, 790743));
        return (e) => (0, n.jsx)(t, { ...A, ...e });
    });
}
function Az(A, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    AQ({
        title: A,
        body:
            "string" == typeof t
                ? t
                : G.intl.format(t, {
                      highlightHook: (A) =>
                          (0, n.jsx)(c.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              style: { display: "inline" },
                              children: A,
                          }),
                      ...e,
                  }),
        cta: G.intl.string(G.t["NX+WJN"]),
        onConfirm: () => {},
    });
}
var AZ = e(785007),
    AL = e(187322),
    AS = e(750943),
    AG = e(22231),
    AO = e(241326),
    AR = e(946274),
    AB = e(700070);
let Ay = "custom-image",
    Ak = r.forwardRef(function (A, t) {
        let { selectedImageName: e, onChange: r, disabled: l = !1, name: i, alt: s, data: o } = A,
            d = i === e,
            u = (0, AZ.Gx)({ isSelected: d, label: s }),
            g = l
                ? void 0
                : () => {
                      r(o, i);
                  };
        return (0, n.jsx)(Ab.D, {
            ref: t,
            className: a()(AB.hO, { [AB.wH]: d, [AB.r9]: l }),
            onClick: g,
            "aria-disabled": l,
            ...u,
            children: (0, n.jsx)("img", { src: o, alt: s, className: AB.mp }),
        });
    });
function AY(A) {
    let {
            presetImages: t,
            image: e,
            imageName: l,
            savedImageName: i,
            onChange: s,
            uploadButtonLabel: o = G.intl.string(G.t["MsUY/S"]),
            radioGroupAriaLabel: d = G.intl.string(G.t["0Q0UJq"]),
            disabled: u = !1,
        } = A,
        g = l === Ay,
        [q, m] = r.useState(g ? e : null),
        [C, p] = r.useState(null),
        h = r.useRef(null),
        f = r.useRef(null);
    r.useEffect(() => {
        i !== Ay && (m(null), p(null));
    }, [i]);
    let U = null != C ? G.intl.formatToPlainString(G.t["Kw+5YX"], { filename: C }) : G.intl.string(G.t.SNPvSv),
        { ref: V, ...v } = (0, AZ._u)({ orientation: "horizontal", isDisabled: u });
    return (
        r.useEffect(() => {
            g && null != C && f.current?.ref?.focus();
        }, [g, C]),
        (0, n.jsxs)("div", {
            className: AB.fE,
            children: [
                (0, n.jsx)(AL.vN, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: a()(AB.au, { [AB.r9]: u, [AB.R]: null != q }),
                        "aria-disabled": u,
                        children: [
                            (0, n.jsx)(AS.X, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, n.jsx)(c.E, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: o,
                            }),
                            (0, n.jsx)(AR.Ay, {
                                ref: h,
                                tabIndex: 0,
                                onChange: (A, t) => {
                                    null != t && (p(t.name), m(A), s(A, Ay));
                                },
                                "aria-label": o,
                            }),
                        ],
                    }),
                }),
                null != q &&
                    (0, n.jsxs)("div", {
                        className: AB.kt,
                        children: [
                            (0, n.jsx)(AV.m, {
                                asContainer: !0,
                                text: G.intl.string(G.t.AQYXMO),
                                children: (0, n.jsx)(Ab.D, {
                                    className: AB.xA,
                                    onClick: () => h.current?.activateUploadDialogue(),
                                    "aria-label": G.intl.formatToPlainString(G.t.Qc9Lg6, { filename: C }),
                                    children: (0, n.jsx)(AG.R, { size: "xs", color: "currentColor", className: AB.IZ }),
                                }),
                            }),
                            (0, n.jsx)(AV.m, {
                                asContainer: !0,
                                text: G.intl.string(G.t.WxqWU0),
                                children: (0, n.jsx)(Ab.D, {
                                    className: AB.xA,
                                    onClick: () => {
                                        l === Ay && s(t[0].data, t[0].name), m(null), p(null);
                                    },
                                    "aria-label": G.intl.formatToPlainString(G.t.Z43V9S, { filename: C }),
                                    children: (0, n.jsx)(AO.u, { size: "md", color: "currentColor", className: AB.fy }),
                                }),
                            }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    "aria-label": d,
                    ref: V,
                    ...v,
                    className: AB.R$,
                    children: [
                        null != q &&
                            (0, n.jsx)(Ak, {
                                ref: f,
                                selectedImageName: l,
                                onChange: s,
                                disabled: u,
                                name: Ay,
                                alt: U,
                                data: q,
                            }),
                        t.map((A) => (0, n.jsx)(Ak, { selectedImageName: l, onChange: s, disabled: u, ...A }, A.name)),
                    ],
                }),
            ],
        })
    );
}
var AE = e(952270),
    AD = e(175841),
    AH = e(467585);
function Aw(A) {
    let { disabled: t = !1, disabledTooltip: e, published: l, submitting: i = !1, onClick: s } = A,
        o = (0, N.GV)(),
        [d, u] = r.useState(l);
    return (
        r.useEffect(() => {
            u((A) => A || l);
        }, [l]),
        (0, n.jsxs)("div", {
            className: a()({ [AH.g$]: !t && !l, [AH.oZ]: d }, AH.nw),
            children: [
                (0, n.jsxs)("div", {
                    className: AH.kL,
                    children: [
                        (0, n.jsxs)("div", {
                            className: AH.S7,
                            children: [
                                (0, n.jsx)(v.D, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: l ? G.intl.string(G.t.Vaaagc) : G.intl.string(G.t.oI8aQf),
                                }),
                                (0, n.jsx)(c.E, {
                                    id: o,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: l ? G.intl.string(G.t["0r6pbG"]) : G.intl.string(G.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(F.$, {
                            text: l ? G.intl.string(G.t.DlJOvl) : G.intl.string(G.t.X7YGXE),
                            icon: l ? AE.G : AD.B,
                            iconPosition: "end",
                            variant: l ? "critical-primary" : "expressive",
                            "aria-describedby": o,
                            "aria-disabled": t,
                            disabled: t,
                            onClick: t ? void 0 : s,
                            loading: i,
                        }),
                    ],
                }),
                t && (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: e }),
            ],
        })
    );
}
var AM = e(317097),
    AJ = e(528265),
    A_ = e(695366),
    A$ = e(905499),
    A0 = e(532446),
    A1 = e(744898),
    A9 = e(922016),
    A6 = e(508274),
    A3 = e(408278),
    A7 = e(714385),
    A2 = e(411342),
    A5 = e(22305);
let A8 = (0, N.Ld)();
function A4(A) {
    let { newRoleParams: t, setNewRoleParams: e } = A,
        l = r.useRef(null),
        { name: a, color: i } = t,
        o = (A) => e((t) => (s()(null != t, "newRoleParams should be defined"), { ...t, color: A }));
    return (0, n.jsxs)("div", {
        className: A5.CJ,
        children: [
            (0, n.jsx)(b.k, {
                autoFocus: !0,
                value: a,
                onChange: (A) => e((t) => (s()(null != t, "newRoleParams should be defined"), { ...t, name: A })),
                id: A8,
                placeholder: G.intl.string(G.t.oNauug),
                maxLength: S.fHV,
            }),
            (0, n.jsxs)("div", {
                className: A5.P4,
                children: [
                    (0, n.jsx)(P.A, { children: G.intl.format(G.t["Vlq/pH"], { color: (0, AM.Hl)(i) }) }),
                    (0, n.jsx)(A9.Y, {
                        targetElementRef: l,
                        renderPopout: (A) => (0, n.jsx)(A6.VN, { ...A, value: i, onChange: o }),
                        children: (A) =>
                            (0, n.jsx)(A3.K, {
                                ...A,
                                variant: "secondary",
                                icon: A7.d,
                                buttonRef: l,
                                "aria-label": G.intl.string(G.t.QLgdlS),
                            }),
                    }),
                ],
            }),
            (0, n.jsx)(A2.A, { role: t }),
        ],
    });
}
var tA = e(955894);
function tt(A) {
    let t,
        { onRemove: e, role: r } = A;
    return null != r
        ? (0, n.jsx)(AJ.C, {
              items: [{ id: r.id, label: r.name, icon: { type: "role", color: (0, AM.Hl)(r.color) } }],
              onRemove: e,
          })
        : ((t = (0, n.jsx)(Ax.y, { type: Ax.y.Type.PULSING_ELLIPSIS })),
          (0, n.jsx)("div", { className: tA.qo, children: t }));
}
function te() {
    return (0, n.jsx)(A_.E, { size: "xs", color: "currentColor", className: tA.QW });
}
function tn(A) {
    let { roleName: t } = A;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: G.intl.format(G.t.i2x5aY, {
                    roleName: t,
                    emphasisHook: (A) =>
                        (0, n.jsx)(c.E, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: A,
                        }),
                }),
            }),
            (0, n.jsxs)(v.D, {
                className: tA.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(A$.N, { size: "sm", color: "currentColor" }),
                    (0, n.jsx)(m.h, { horizontal: !0, size: 8 }),
                    G.intl.string(G.t.KWx4HY),
                ],
            }),
            (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-muted", children: G.intl.string(G.t.hNHNph) }),
            (0, n.jsxs)(v.D, {
                className: tA.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(AO.u, { size: "sm", color: "currentColor" }),
                    (0, n.jsx)(m.h, { horizontal: !0, size: 8 }),
                    G.intl.string(G.t.WIPKAb),
                ],
            }),
            (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-muted", children: G.intl.string(G.t["40shJX"]) }),
        ],
    });
}
function tr(A) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: l, productId: a, listingRoleId: i, error: d } = A,
        u = (0, o.bG)([M.A], () => (null != i ? M.A.getRole(l, i) : void 0));
    return null === t
        ? (0, n.jsx)(K.D, {
              label: G.intl.string(G.t.ovXIrP),
              description: G.intl.string(G.t["H7coX+"]),
              children: (0, n.jsxs)(A0.M, {
                  children: [
                      (0, n.jsx)(tt, { role: u, onRemove: void 0 }),
                      (0, n.jsx)(F.$, {
                          text: G.intl.string(G.t.KkRpFi),
                          icon: A1.e,
                          iconPosition: "end",
                          variant: "secondary",
                          onClick: () => {
                              r(void 0);
                          },
                      }),
                  ],
              }),
          })
        : null != i
          ? (0, n.jsx)(K.D, {
                label: G.intl.string(G.t.zIg9tw),
                description: G.intl.string(G.t.OfuEkP),
                errorMessage: d,
                children: (0, n.jsx)(tt, {
                    role: u,
                    onRemove: () => {
                        s()(null != a, "productId cannot be null"),
                            s()(null != u, "no role attached"),
                            (function (A) {
                                let { onConfirm: t, roleName: r } = A;
                                (0, U.openModalLazy)(async () => {
                                    let { default: A } = await e.e("44252").then(e.bind(e, 790743));
                                    return (e) =>
                                        (0, n.jsx)(A, {
                                            title: G.intl.string(G.t.Y3Hi3R),
                                            body: (0, n.jsx)(tn, { roleName: r }),
                                            cta: G.intl.string(G.t.VawZVx),
                                            closeLabel: G.intl.string(G.t["6y+3Bw"]),
                                            onConfirm: t,
                                            ...e,
                                        });
                                });
                            })({ roleName: u.name, onConfirm: () => r(null) });
                    },
                }),
            })
          : (s()(null != t, "newRoleParams cannot be null at this point"),
            (0, n.jsx)(K.D, {
                required: !0,
                label: G.intl.string(G.t.xZvFpA),
                errorMessage: d,
                children: (0, n.jsx)(A4, { newRoleParams: t, setNewRoleParams: r }),
            }));
}
var tl = e(500208),
    ta = e(705751),
    ti = e(350138);
let ts = (0, N.Ld)(),
    to = (0, N.Ld)(),
    td = (0, N.Ld)();
function tu(A) {
    let { text: t, onChange: e, value: r, disabled: l, warning: i } = A,
        s = (0, N.GV)(),
        o = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(ti.$4, { [ti.r9]: l }),
        htmlFor: s,
        children: [
            (0, n.jsx)(c.E, { variant: "text-sm/medium", color: o, children: t }),
            null != i && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(m.h, { size: 4, horizontal: !0 }), i] }),
            (0, n.jsx)(C.d, { onChange: e, checked: r, disabled: l, id: s }),
        ],
    });
}
function tg(A, t) {
    return A.filter((A) => {
        let { value: e, label: n } = A;
        return e.toString().includes(t) || n.includes(t);
    });
}
function tq(A) {
    let { guildId: t, selectedPriceTier: e, setPriceTier: l, label: a, errorMessage: i } = A,
        { priceTiers: s } = (0, X._)(t, S.L_o.GUILD_PRODUCTS),
        o = r.useMemo(
            () =>
                (s ?? (null != e ? [e] : [])).map((A) => ({
                    id: A.toString(),
                    value: A,
                    label: (0, J.$g)(A, S.Yri.USD),
                })),
            [s, e],
        );
    return (0, n.jsx)(p.Z, {
        selectionMode: "single",
        label: a,
        errorMessage: i,
        value: e,
        placeholder: G.intl.string(G.t.aI4J5H),
        maxOptionsVisible: 5,
        options: o,
        onSelectionChange: l,
        customMatchSorter: tg,
        required: !0,
    });
}
function tc(A) {
    let { guildId: t, productId: l, transitionState: a, onClose: i } = A,
        [C, p] = r.useState(l),
        N = (0, o.bG)([Ag.A], () => (null == C ? null : Ag.A.getGuildProduct(C)), [C]),
        X = (0, o.bG)([Ag.A], () => Ag.A.getGuildProductsForGuild(t, { publishedOnly: !0 }).length, [t]),
        T = N?.published === !0,
        { application: W } = (0, I.A)(t, ta.S7.GUILD_ROLE_SUBSCRIPTIONS),
        P = Af["0"],
        Q = w.kt.useSetting(),
        z = (0, $.j)(),
        Z = r.useCallback(
            () =>
                N?.image_asset?.application_id == null
                    ? P.data
                    : (0, _.YE)(N.image_asset.application_id, N.image_asset, 600, z && Q ? void 0 : "webp"),
            [P, N, z, Q],
        ),
        { shouldRestrictUpdatingCreatorMonetizationSettings: L } = (0, D.nq)(t);
    r.useEffect(() => {
        L && (i(), Az(G.intl.string(G.t.OLf3xn), G.t["90LBVr"]));
    }, [L, i]);
    let [O, R] = r.useState(N?.name ?? ""),
        [B, y] = r.useState(N?.description ?? ""),
        [k, Y] = r.useState(N?.price_tier ?? void 0),
        [H, AA] = r.useState(Z),
        [At, Ae] = r.useState(N?.image_asset?.filename ?? P.name),
        [An, Ar] = r.useState(!1),
        [Al, Aa] = r.useState(),
        Ai = r.useMemo(() => (null != k ? (0, J.$g)(k, S.Yri.USD) : void 0), [k]),
        [As, Ao] = r.useState(!0),
        {
            changesSaving: Ad,
            saveError: Au,
            saveProductWithAttachments: Ac,
            hasUnsavedAttachmentChanges: Am,
            cancelUnusedUploads: AC,
        } = Ap(),
        Ah = N?.attachments != null && N?.attachments.length > 0,
        AV = Au ?? Al,
        Av = null != Ad && "published" in Ad,
        Ax = null != Ad && !Av,
        Ab = N?.role_id ?? null,
        [AK, AF] = r.useState(),
        Aj = null != AK || null != Ab,
        AI = (0, o.bG)([M.A], () => (null != Ab && null !== AK ? M.A.getRole(t, Ab) : (AK ?? void 0)), [AK, Ab, t]),
        AN = "";
    Aj && As
        ? (AN = G.intl.string(G.t.ih4QMU))
        : Aj
          ? (AN = G.intl.string(G.t.o9xphc))
          : As && (AN = G.intl.string(G.t.DWYJua));
    let AX = () => {
            Ao(!1), AC();
        },
        [AT, AW] = r.useState(),
        {
            changes: AZ,
            hasUnsavedChanges: AL,
            canSaveForDraft: AS,
            canSaveForPublished: AG,
            canPublishOrUnpublish: AO,
        } = r.useMemo(
            () =>
                (0, Aq.EY)({
                    guildProductListing: N,
                    name: O,
                    priceTier: k,
                    description: B,
                    image: H,
                    imageName: At,
                    isImageChanged: An,
                    newRoleParams: AK,
                    hasSavedAttachments: Ah,
                    hasUnsavedAttachmentChanges: Am,
                }),
            [N, O, k, B, H, At, An, AK, Ah, Am],
        ),
        AR = r.useMemo(
            () =>
                AL || null == AT || "publish" === AT || null != AV
                    ? null
                    : (0, n.jsx)(h.F, {
                          className: ti.Er,
                          children: (0, n.jsx)(g.A, {
                              message: (0, n.jsxs)("div", {
                                  className: ti.Lk,
                                  children: [
                                      (0, n.jsx)(f.y, {
                                          size: "md",
                                          color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.A.colors.WHITE.css,
                                      }),
                                      (0, n.jsx)(c.E, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === AT
                                                  ? G.intl.string(G.t["3Rv4MB"])
                                                  : "update_publish" === AT
                                                    ? G.intl.string(G.t["8fPiB3"])
                                                    : G.intl.string(G.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => AW(void 0),
                              onResetText: G.intl.string(G.t.T6QuWe),
                          }),
                      }),
            [AV, AL, AT],
        ),
        AB = r.useCallback(() => {
            AL
                ? AQ({
                      title: G.intl.string(G.t.FVDhIW),
                      body: G.intl.string(G.t.Hgdhwb),
                      cta: G.intl.string(G.t["h0bti/"]),
                      closeLabel: G.intl.string(G.t["+WYo0m"]),
                      onConfirm: () => {
                          i();
                      },
                  })
                : i();
        }, [i, AL]);
    r.useEffect(() => {
        (0, U.updateModal)(tl.DG, (A) => (0, n.jsx)(tm, { guildId: t, productId: C, ...A }), AB);
    }, [t, AB, C]);
    let Ay = async (A) => {
        let e = (0, Aq.ig)({ newRoleParams: AK });
        if ((Aa(e), null != e)) return;
        let n = await Ac(A);
        if ((Ar(!1), null != n)) {
            if ((null != A.name && R(n.name), null != A.description && y(n.description), null != AK)) {
                let A = n.role_id;
                s()(null != A, "Cannot update role without role ID"), await j.A.updateRole(t, A, AK);
            }
            AF(void 0), p(n.id), "published" in A && !0 === A.published && i();
        }
    };
    r.useEffect(() => {
        null != AV &&
            (function (A, t, r) {
                switch (A.code) {
                    case S.t02.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
                        Az(G.intl.string(G.t["04e8bO"]), G.t.uVN1Y5);
                        break;
                    case S.t02.TWO_FA_NOT_ENABLED:
                        Az(G.intl.string(G.t["/yBjZy"]), G.t.kZ6Tgg);
                        break;
                    case S.t02.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
                        Az(G.intl.string(G.t.MeXDxg), G.t["5q146K"]);
                        break;
                    case S.t02.MONETIZATION_TERMS_NOT_ACCEPTED:
                        (0, U.openModalLazy)(async () => {
                            let { default: A } = await Promise.all([e.e("12390"), e.e("91826")]).then(
                                e.bind(e, 431913),
                            );
                            return (e) => (0, n.jsx)(A, { guildId: t, ...e });
                        });
                        break;
                    case S.t02.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
                        Az(G.intl.string(G.t["4hWo0C"]), G.t.Zkhwex);
                        break;
                    case S.t02.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
                        let l, a;
                        null != r
                            ? ((l = G.t.j2VMk6), (a = { url: S.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(r) }))
                            : (l = G.t.ZVV1gg),
                            Az(G.intl.string(G.t["+CT/gV"]), l, a);
                        break;
                    default:
                        let i =
                            A.getFirstFieldErrorMessage(["published"]) ?? (A.hasFieldErrors?.() ? void 0 : A.message);
                        null != i && Az(G.intl.string(G.t.bvWf8T), i);
                }
            })(AV, t, W?.team?.id);
    }, [AV, t, W]),
        r.useEffect(() => {
            AL && AW(void 0);
        }, [AL]);
    let Ak = r.useRef(null);
    return (0, n.jsxs)(V.EO, {
        transitionState: a,
        size: V.rI.DYNAMIC,
        className: ti.CR,
        "aria-labelledby": ts,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(V.rQ, {
                className: ti.Hc,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: ti.TK,
                        children: [
                            (0, n.jsx)(v.D, {
                                id: ts,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: G.intl.string(G.t.DnNl1T),
                            }),
                            (0, n.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: G.intl.string(G.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(V.s_, {
                        onClick: AB,
                        className: ti.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(V.$m, {
                className: ti.jE,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(x.Ip, {
                        children: (0, n.jsxs)("div", {
                            className: ti.sj,
                            ref: Ak,
                            children: [
                                (0, n.jsx)(b.k, {
                                    label: G.intl.string(G.t.Hsk7xT),
                                    error: AV?.getFirstFieldErrorMessage("name"),
                                    value: O,
                                    onChange: R,
                                    id: to,
                                    maxLength: 100,
                                    placeholder: G.intl.string(G.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(E, {
                                    label: G.intl.string(G.t.QdKLyW),
                                    errorMessage: AV?.getFirstFieldErrorMessage("description") ?? void 0,
                                    id: td,
                                    className: ti.kj,
                                    value: B,
                                    onChange: y,
                                    maxLength: 1500,
                                    placeholder: G.intl.string(G.t.BFwyum),
                                    showCharacterCount: B.length > 0,
                                    parentModalKey: tl.DG,
                                    required: !0,
                                }),
                                (0, n.jsx)(tq, {
                                    label: G.intl.string(G.t["CAY/vh"]),
                                    errorMessage: AV?.getFirstFieldErrorMessage("price_tier") ?? void 0,
                                    guildId: t,
                                    selectedPriceTier: k,
                                    setPriceTier: Y,
                                }),
                                (0, n.jsx)(K.D, {
                                    label: G.intl.string(G.t.sqXj60),
                                    errorMessage: AV?.getFirstFieldErrorMessage("image") ?? void 0,
                                    description: G.intl.string(G.t.yOU4Vm),
                                    children: (0, n.jsx)(AY, {
                                        presetImages: Af,
                                        radioGroupAriaLabel: G.intl.string(G.t.fKzQj0),
                                        image: H,
                                        imageName: At,
                                        savedImageName: N?.image_asset?.filename,
                                        onChange: (A, t) => {
                                            null != A &&
                                                (AA(A),
                                                Ae(t),
                                                Ar(A.startsWith("data:") || t !== N?.image_asset?.filename));
                                        },
                                    }),
                                }),
                                As
                                    ? (0, n.jsx)(K.D, {
                                          label: G.intl.string(G.t.zLrtkN),
                                          errorMessage: AV?.getFirstFieldErrorMessage("attachments") ?? void 0,
                                          children: (0, n.jsx)(AP, {
                                              onFileAdded: () => {
                                                  Ak.current?.scrollIntoView({ behavior: "smooth", block: "end" });
                                              },
                                          }),
                                      })
                                    : null,
                                Aj
                                    ? (0, n.jsx)(tr, {
                                          error: AV?.getFirstFieldErrorMessage(Aq.a) ?? void 0,
                                          newRoleParams: AK,
                                          setNewRoleParams: AF,
                                          guildId: t,
                                          listingRoleId: Ab,
                                          productId: C,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: ti.cD }),
                    (0, n.jsx)(x.Ip, {
                        children: (0, n.jsxs)("div", {
                            className: ti.mA,
                            children: [
                                (0, n.jsx)(Aw, {
                                    disabled: !AO || (!T && X >= 50),
                                    disabledTooltip: T
                                        ? G.intl.string(G.t["0NQ00t"])
                                        : X >= 50
                                          ? G.intl.format(G.t.IqWPVt, { maxProducts: 50 })
                                          : G.intl.string(G.t["Ax89/c"]),
                                    published: T,
                                    onClick: () => {
                                        s()(AO, "Attempting to publish/unpublish when not allowed"),
                                            AW(T ? "unpublish" : "publish"),
                                            Ay({ ...AZ, published: !T });
                                    },
                                    submitting: Av,
                                }),
                                (0, n.jsx)("div", { className: ti.AC }),
                                (0, n.jsx)(v.D, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: ti.B9,
                                    children: G.intl.string(G.t["6I7nQT"]),
                                }),
                                (0, n.jsx)(m.h, { size: 4 }),
                                (0, n.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: G.intl.string(G.t.Oq4dfU),
                                }),
                                (0, n.jsx)(m.h, { size: 16 }),
                                (0, n.jsx)(AU.A, {
                                    imageUrl: H,
                                    name: "" === O ? G.intl.string(G.t.EmqIwl) : O,
                                    description: "" === B ? G.intl.string(G.t["11NA2L"]) : B,
                                    formattedPrice: Ai,
                                    role: AI,
                                    productType: AN,
                                    ctaComponent: (0, n.jsx)(F.$, { text: G.intl.string(G.t.xUi3BL) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(V.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: ti.jj,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ti.mx,
                            children: [
                                (0, n.jsx)(tu, {
                                    text: G.intl.string(G.t.YzGIVF),
                                    value: Aj,
                                    onChange: (A) => {
                                        A ? AF({ name: "", color: S.TGz }) : AF(void 0);
                                    },
                                    warning: null === AK ? (0, n.jsx)(te, {}) : void 0,
                                    disabled: null != Ab,
                                }),
                                (0, n.jsx)(tu, {
                                    text: G.intl.string(G.t.C6wP2Q),
                                    value: As,
                                    onChange: (A) => {
                                        A
                                            ? Ao(!0)
                                            : Am
                                              ? (0, q.A)({
                                                    title: G.intl.string(G.t["2WihyY"]),
                                                    subtitle: G.intl.string(G.t.ixRBLh),
                                                    confirmText: G.intl.string(G.t.N86XcP),
                                                    onConfirm: AX,
                                                })
                                              : AX();
                                    },
                                    disabled: Ah,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: ti.TM,
                            children: T
                                ? (0, n.jsx)(F.$, {
                                      variant: "secondary",
                                      text: G.intl.string(G.t.XYBEaV),
                                      disabled: !AG,
                                      loading: Ax,
                                      onClick: () => {
                                          s()(
                                              AG,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              AW("update_publish"),
                                              Ay(AZ);
                                      },
                                  })
                                : (0, n.jsx)(F.$, {
                                      variant: "secondary",
                                      text: G.intl.string(G.t.ZCjwob),
                                      disabled: !AS,
                                      loading: Ax,
                                      onClick: () => {
                                          s()(AS, "cannot save changes without name or price tier"),
                                              AW("draft"),
                                              Ay(AZ);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(u.F, { component: "div", className: ti.Nt, children: AR }),
        ],
    });
}
function tm(A) {
    return (0, n.jsx)(Ah, {
        guildId: A.guildId,
        editSkuId: A.productId ?? void 0,
        onFileSizeError: () => (0, H.A)(tl.vN),
        children: (0, n.jsx)(tc, { ...A }),
    });
}
