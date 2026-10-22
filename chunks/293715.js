n.d(t, { j: () => m });
var l = n(706121),
    r = n(766089);
let a = {
        primaryBackgroundColor: "#7D53DE",
        secondaryBackgroundColor: "#BCB1D5",
        tertiaryBackgroundColor: "#CFC3EB",
        shadowColor: "#411D96",
        backgroundGradientStartColor: "#2F156B",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/4a63c3de5c45c6c85993095b513e2df12c4a7ee1b89da6ee59143f183b88858d.png",
        clydeLogoImage:
            "https://cdn.discordapp.com/assets/content/8fb2da3fe061765e871c1dfe2d1fb9a48cbf7524ec7117cd0f94a9fda343f46a.png",
    },
    s = {
        primaryBackgroundColor: "#34E2F1",
        secondaryBackgroundColor: "#94CCD1",
        tertiaryBackgroundColor: "#A5E3E9",
        shadowColor: "#0C9BA7",
        backgroundGradientStartColor: "#12606D",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/9e1079ca931d60e62a94fed7ce7f6aae2809869172f8b4539c5912f51d3bc3b0.png",
        clydeLogoImage: r.A,
    },
    i = {
        primaryBackgroundColor: "#FF4CD2",
        secondaryBackgroundColor: "#D5A9D6",
        tertiaryBackgroundColor: "#E9BBE9",
        shadowColor: "#B20086",
        backgroundGradientStartColor: "#80005F",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/03f782ff288303bdb4a2c89c5232dc148176a4ef92a91c0a27946828a23f8c74.png",
        clydeLogoImage:
            "https://cdn.discordapp.com/assets/content/12bef24e4178ed2672fcbee94c1278d0957347f971a884f064680bbf838b722e.png",
    },
    o = {
        primaryBackgroundColor: "#35ED7E",
        secondaryBackgroundColor: "#B2C5B1",
        tertiaryBackgroundColor: "#B5DCB3",
        shadowColor: "#0FA44A",
        backgroundGradientStartColor: "#0A7535",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/703d350a9435cde8cc76f3e3222a3c6987e9b0ba400ce0a44e98955c334bcb25.png",
        clydeLogoImage:
            "https://cdn.discordapp.com/assets/content/753ed9d0d9931131148aec9cdc2a4feb03ac3b8d16a740e70513ff026f493b8d.png",
    },
    c = {
        primaryBackgroundColor: "#EF3054",
        secondaryBackgroundColor: "#E5A1AE",
        tertiaryBackgroundColor: "#F6AFBC",
        shadowColor: "#A60D2A",
        backgroundGradientStartColor: "#76091E",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/a0900e98dda9e22cd12fb02b24fabbc42f4dcff0fe8f1452c52130d284d2746a.png",
        clydeLogoImage:
            "https://cdn.discordapp.com/assets/content/ffe9b4b4b574f5a60dbff2190853fede8d8e7ae9551ac87aba1040c2a2a6c8bf.png",
    },
    d = {
        primaryBackgroundColor: "#FFE047",
        secondaryBackgroundColor: "#E6CBA8",
        tertiaryBackgroundColor: "#FFE0B8",
        shadowColor: "#B29400",
        backgroundGradientStartColor: "#806A00",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/829db76fbce7913d7aebb80510f98d619143a642bbd7d48ced871be5aab0cb29.png",
        clydeLogoImage:
            "https://cdn.discordapp.com/assets/content/a519e1e3b39e63ab70550192f16e91af1c6e9e6590cee36fc395eac4fc8468ce.png",
    },
    u = {
        [l.R.GALACTIC]: a,
        [l.R.IRIDESCENT]: a,
        [l.R.CHROME]: a,
        [l.R.ICY]: s,
        [l.R.LIQUID]: s,
        [l.R.GLACIER]: s,
        [l.R.MIDNIGHT]: i,
        [l.R.PURPLE]: i,
        [l.R.COBALT]: i,
        [l.R.FOREST]: o,
        [l.R.X_RAY]: o,
        [l.R.CRIMSON]: c,
        [l.R.RED]: c,
        [l.R.BUTTER]: d,
        [l.R.ORANGE]: d,
    };
function m(e) {
    return (null != e ? u[e.base] : void 0) ?? s;
}
