n.d(t, { j: () => d });
var l = n(706121);
let r = {
        primaryBackgroundColor: "#7D53DE",
        secondaryBackgroundColor: "#BCB1D5",
        tertiaryBackgroundColor: "#CFC3EB",
        shadowColor: "#411D96",
        backgroundGradientStartColor: "#2F156B",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/4a63c3de5c45c6c85993095b513e2df12c4a7ee1b89da6ee59143f183b88858d.png",
    },
    a = {
        primaryBackgroundColor: "#34E2F1",
        secondaryBackgroundColor: "#94CCD1",
        tertiaryBackgroundColor: "#A5E3E9",
        shadowColor: "#0C9BA7",
        backgroundGradientStartColor: "#12606D",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/9e1079ca931d60e62a94fed7ce7f6aae2809869172f8b4539c5912f51d3bc3b0.png",
    },
    i = {
        primaryBackgroundColor: "#FF4CD2",
        secondaryBackgroundColor: "#D5A9D6",
        tertiaryBackgroundColor: "#E9BBE9",
        shadowColor: "#B20086",
        backgroundGradientStartColor: "#80005F",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/03f782ff288303bdb4a2c89c5232dc148176a4ef92a91c0a27946828a23f8c74.png",
    },
    s = {
        primaryBackgroundColor: "#35ED7E",
        secondaryBackgroundColor: "#B2C5B1",
        tertiaryBackgroundColor: "#B5DCB3",
        shadowColor: "#0FA44A",
        backgroundGradientStartColor: "#0A7535",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/703d350a9435cde8cc76f3e3222a3c6987e9b0ba400ce0a44e98955c334bcb25.png",
    },
    o = {
        primaryBackgroundColor: "#EF3054",
        secondaryBackgroundColor: "#E5A1AE",
        tertiaryBackgroundColor: "#F6AFBC",
        shadowColor: "#A60D2A",
        backgroundGradientStartColor: "#76091E",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/a0900e98dda9e22cd12fb02b24fabbc42f4dcff0fe8f1452c52130d284d2746a.png",
    },
    c = {
        primaryBackgroundColor: "#FFE047",
        secondaryBackgroundColor: "#E6CBA8",
        tertiaryBackgroundColor: "#FFE0B8",
        shadowColor: "#B29400",
        backgroundGradientStartColor: "#806A00",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/829db76fbce7913d7aebb80510f98d619143a642bbd7d48ced871be5aab0cb29.png",
    },
    u = {
        [l.R.GALACTIC]: r,
        [l.R.IRIDESCENT]: r,
        [l.R.CHROME]: r,
        [l.R.ICY]: a,
        [l.R.LIQUID]: a,
        [l.R.GLACIER]: a,
        [l.R.MIDNIGHT]: i,
        [l.R.PURPLE]: i,
        [l.R.COBALT]: i,
        [l.R.FOREST]: s,
        [l.R.X_RAY]: s,
        [l.R.CRIMSON]: o,
        [l.R.RED]: o,
        [l.R.BUTTER]: c,
        [l.R.ORANGE]: c,
    };
function d(e) {
    return (null != e ? u[e.base] : void 0) ?? a;
}
