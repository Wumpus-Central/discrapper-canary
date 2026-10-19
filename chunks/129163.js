(n.d(t, { b5: () => j, vF: () => F, R8: () => V, _S: () => H, q6: () => x }), n(321073));
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c =
        (((i = {}).BASE = "base"),
        (i.SHOES = "shoes"),
        (i.OUTFIT = "outfit"),
        (i.FACE = "face"),
        (i.HAT = "hat"),
        (i.WEARABLE = "wearable"),
        (i.AURA = "aura"),
        i);
let u = new Set([1, 6, 9, 11, 13]),
    _ = ["base", "outfit", "shoes", "wearable", "face", "hat", "aura"],
    E = ["wearable", "base", "outfit", "shoes", "face", "hat", "aura"];
var A = n(155718),
    h = n(7584),
    f = n(935208);
n(835517);
var I = n(957806),
    p =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.BLAZE = 1)] = "BLAZE"),
        (r[(r.BLOSSOM = 2)] = "BLOSSOM"),
        (r[(r.PRISM = 3)] = "PRISM"),
        (r[(r.SHOCK = 4)] = "SHOCK"),
        (r[(r.FATED = 5)] = "FATED"),
        (r[(r.LUSTER = 6)] = "LUSTER"),
        (r[(r.BUBBLES = 7)] = "BUBBLES"),
        (r[(r.SPOOKY = 8)] = "SPOOKY"),
        (r[(r.CURSED = 9)] = "CURSED"),
        (r[(r.MAGNETIC = 10)] = "MAGNETIC"),
        (r[(r.RADIOACTIVE = 11)] = "RADIOACTIVE"),
        (r[(r.ELEMENTAL = 12)] = "ELEMENTAL"),
        (r[(r.SHIMMER = 13)] = "SHIMMER"),
        (r[(r.WITCHY = 14)] = "WITCHY"),
        r),
    T = n(706121),
    m =
        (((a = {})[(a.CHILL = 1)] = "CHILL"),
        (a[(a.CRY_BABY = 2)] = "CRY_BABY"),
        (a[(a.BORED = 3)] = "BORED"),
        (a[(a.LOCKED_IN = 4)] = "LOCKED_IN"),
        (a[(a.SMITTEN = 5)] = "SMITTEN"),
        (a[(a.CONFUSED = 6)] = "CONFUSED"),
        (a[(a.ANXIOUS = 7)] = "ANXIOUS"),
        (a[(a.SPARKLY = 8)] = "SPARKLY"),
        (a[(a.RAGE = 9)] = "RAGE"),
        (a[(a.SUS = 10)] = "SUS"),
        (a[(a.SPELLBOUND = 11)] = "SPELLBOUND"),
        (a[(a.CURSED = 12)] = "CURSED"),
        (a[(a.FREE_FALL = 13)] = "FREE_FALL"),
        (a[(a.POSSESSED = 14)] = "POSSESSED"),
        (a[(a.AWKWARD = 15)] = "AWKWARD"),
        a),
    g =
        (((s = {})[(s.NONE = 0)] = "NONE"),
        (s[(s.CAP = 1)] = "CAP"),
        (s[(s.ELVEN_HEADPIECE = 2)] = "ELVEN_HEADPIECE"),
        (s[(s.HEADPHONES = 3)] = "HEADPHONES"),
        (s[(s.TEDDY_BEANIE = 4)] = "TEDDY_BEANIE"),
        (s[(s.PIERCINGS = 5)] = "PIERCINGS"),
        (s[(s.HEADBAND = 6)] = "HEADBAND"),
        (s[(s.SUNGLASSES = 7)] = "SUNGLASSES"),
        (s[(s.BANANA_PEEL = 8)] = "BANANA_PEEL"),
        (s[(s.LEAF = 9)] = "LEAF"),
        (s[(s.FIRE = 10)] = "FIRE"),
        (s[(s.HALO = 11)] = "HALO"),
        (s[(s.BRAIN = 12)] = "BRAIN"),
        (s[(s.TRAFFIC_CONE = 13)] = "TRAFFIC_CONE"),
        (s[(s.CROWN = 14)] = "CROWN"),
        s),
    S =
        (((l = {})[(l.NONE = 0)] = "NONE"),
        (l[(l.BADDIE_DEFAULT = 1)] = "BADDIE_DEFAULT"),
        (l[(l.TRAVELER_DEFAULT = 2)] = "TRAVELER_DEFAULT"),
        (l[(l.STREAMER_DEFAULT = 3)] = "STREAMER_DEFAULT"),
        (l[(l.CAMPER_DEFAULT = 4)] = "CAMPER_DEFAULT"),
        (l[(l.ATHLETE_DEFAULT = 5)] = "ATHLETE_DEFAULT"),
        (l[(l.COWPOKE_DEFAULT = 6)] = "COWPOKE_DEFAULT"),
        (l[(l.GOTH_DEFAULT = 7)] = "GOTH_DEFAULT"),
        (l[(l.ASTRONAUT_DEFAULT = 8)] = "ASTRONAUT_DEFAULT"),
        (l[(l.JESTER_DEFAULT = 9)] = "JESTER_DEFAULT"),
        (l[(l.TRASH_CAN_DEFAULT = 10)] = "TRASH_CAN_DEFAULT"),
        (l[(l.MAGE_DEFAULT = 11)] = "MAGE_DEFAULT"),
        (l[(l.MECH_DEFAULT = 12)] = "MECH_DEFAULT"),
        (l[(l.KNIGHT_DEFAULT = 13)] = "KNIGHT_DEFAULT"),
        (l[(l.MAGICAL_DEFAULT = 14)] = "MAGICAL_DEFAULT"),
        (l[(l.BADDIE_MONOCHROME = 15)] = "BADDIE_MONOCHROME"),
        (l[(l.BADDIE_VIOLET = 16)] = "BADDIE_VIOLET"),
        (l[(l.BADDIE_PASTEL = 17)] = "BADDIE_PASTEL"),
        (l[(l.BADDIE_SUNSET = 18)] = "BADDIE_SUNSET"),
        (l[(l.TRAVELER_HAZE = 19)] = "TRAVELER_HAZE"),
        (l[(l.TRAVELER_MOSS = 20)] = "TRAVELER_MOSS"),
        (l[(l.TRAVELER_CHRONO = 21)] = "TRAVELER_CHRONO"),
        (l[(l.TRAVELER_UMBER = 22)] = "TRAVELER_UMBER"),
        (l[(l.STREAMER_FLAMES = 23)] = "STREAMER_FLAMES"),
        (l[(l.STREAMER_STRIPES = 24)] = "STREAMER_STRIPES"),
        (l[(l.STREAMER_SMILEY = 25)] = "STREAMER_SMILEY"),
        (l[(l.STREAMER_VINTAGE = 26)] = "STREAMER_VINTAGE"),
        (l[(l.CAMPER_PLAID = 27)] = "CAMPER_PLAID"),
        (l[(l.CAMPER_SWAMP = 28)] = "CAMPER_SWAMP"),
        (l[(l.CAMPER_GLAMP = 29)] = "CAMPER_GLAMP"),
        (l[(l.CAMPER_AMBER = 30)] = "CAMPER_AMBER"),
        (l[(l.ATHLETE_BLOCKED = 31)] = "ATHLETE_BLOCKED"),
        (l[(l.ATHLETE_FADED = 32)] = "ATHLETE_FADED"),
        (l[(l.ATHLETE_CHECKERED = 33)] = "ATHLETE_CHECKERED"),
        (l[(l.ATHLETE_LINED = 34)] = "ATHLETE_LINED"),
        (l[(l.COWPOKE_ONYX = 35)] = "COWPOKE_ONYX"),
        (l[(l.COWPOKE_STEEL = 36)] = "COWPOKE_STEEL"),
        (l[(l.COWPOKE_DENIM = 37)] = "COWPOKE_DENIM"),
        (l[(l.COWPOKE_BLUSH = 38)] = "COWPOKE_BLUSH"),
        (l[(l.GOTH_SIREN = 39)] = "GOTH_SIREN"),
        (l[(l.GOTH_SERPENT = 40)] = "GOTH_SERPENT"),
        (l[(l.GOTH_RAVEN = 41)] = "GOTH_RAVEN"),
        (l[(l.GOTH_VAMP = 42)] = "GOTH_VAMP"),
        (l[(l.ASTRONAUT_STARDUST = 43)] = "ASTRONAUT_STARDUST"),
        (l[(l.ASTRONAUT_MARTIAN = 44)] = "ASTRONAUT_MARTIAN"),
        (l[(l.ASTRONAUT_SOLAR = 45)] = "ASTRONAUT_SOLAR"),
        (l[(l.ASTRONAUT_COSMIC = 46)] = "ASTRONAUT_COSMIC"),
        (l[(l.JESTER_CONFETTI = 47)] = "JESTER_CONFETTI"),
        (l[(l.JESTER_CARNIVAL = 48)] = "JESTER_CARNIVAL"),
        (l[(l.JESTER_SUNRISE = 49)] = "JESTER_SUNRISE"),
        (l[(l.JESTER_NIGHTFALL = 50)] = "JESTER_NIGHTFALL"),
        (l[(l.TRASH_CAN_BLACKOUT = 51)] = "TRASH_CAN_BLACKOUT"),
        (l[(l.TRASH_CAN_CAUTION = 52)] = "TRASH_CAN_CAUTION"),
        (l[(l.TRASH_CAN_BUBBLEGUM = 53)] = "TRASH_CAN_BUBBLEGUM"),
        (l[(l.TRASH_CAN_TOXIC = 54)] = "TRASH_CAN_TOXIC"),
        (l[(l.MAGE_SHADOW = 55)] = "MAGE_SHADOW"),
        (l[(l.MAGE_DUSK = 56)] = "MAGE_DUSK"),
        (l[(l.MAGE_WILDWOOD = 57)] = "MAGE_WILDWOOD"),
        (l[(l.MAGE_WINTER = 58)] = "MAGE_WINTER"),
        (l[(l.MECH_AERO = 59)] = "MECH_AERO"),
        (l[(l.MECH_VIPER = 60)] = "MECH_VIPER"),
        (l[(l.MECH_ULTRAVIOLET = 61)] = "MECH_ULTRAVIOLET"),
        (l[(l.MECH_SANDSTORM = 62)] = "MECH_SANDSTORM"),
        (l[(l.KNIGHT_IRON = 63)] = "KNIGHT_IRON"),
        (l[(l.KNIGHT_RUST = 64)] = "KNIGHT_RUST"),
        (l[(l.KNIGHT_PETAL = 65)] = "KNIGHT_PETAL"),
        (l[(l.KNIGHT_GLACIER = 66)] = "KNIGHT_GLACIER"),
        (l[(l.MAGICAL_SAPPHIRE = 67)] = "MAGICAL_SAPPHIRE"),
        (l[(l.MAGICAL_AMETHYST = 68)] = "MAGICAL_AMETHYST"),
        (l[(l.MAGICAL_FROST = 69)] = "MAGICAL_FROST"),
        (l[(l.MAGICAL_CITRINE = 70)] = "MAGICAL_CITRINE"),
        l),
    N =
        (((o = {})[(o.NONE = 0)] = "NONE"),
        (o[(o.SNEAKERS = 1)] = "SNEAKERS"),
        (o[(o.SOCKS = 2)] = "SOCKS"),
        (o[(o.WUMPUS_SLIPPERS = 3)] = "WUMPUS_SLIPPERS"),
        (o[(o.BIONIC = 4)] = "BIONIC"),
        (o[(o.PLATFORMS = 5)] = "PLATFORMS"),
        (o[(o.WESTERN_BOOTS = 6)] = "WESTERN_BOOTS"),
        (o[(o.KITTY_PAWS = 7)] = "KITTY_PAWS"),
        (o[(o.ROLLER_SKATES = 8)] = "ROLLER_SKATES"),
        (o[(o.SNOW_SHOES = 9)] = "SNOW_SHOES"),
        (o[(o.ICARUS_SANDALS = 10)] = "ICARUS_SANDALS"),
        (o[(o.CLOWN = 11)] = "CLOWN"),
        (o[(o.FANCY_HEELS = 12)] = "FANCY_HEELS"),
        (o[(o.BALLET = 13)] = "BALLET"),
        (o[(o.CYBER_STOMPERS = 14)] = "CYBER_STOMPERS"),
        o),
    C =
        (((d = {})[(d.NONE = 0)] = "NONE"),
        (d[(d.ANGEL_WINGS = 1)] = "ANGEL_WINGS"),
        (d[(d.STICKERS = 2)] = "STICKERS"),
        (d[(d.TOTE = 3)] = "TOTE"),
        (d[(d.WIZARD_STAFF = 4)] = "WIZARD_STAFF"),
        (d[(d.SKATEBOARD = 5)] = "SKATEBOARD"),
        (d[(d.DRAGON_WINGS = 6)] = "DRAGON_WINGS"),
        (d[(d.TAKE_OUT_BAG = 7)] = "TAKE_OUT_BAG"),
        (d[(d.PIXEL_WRENCH = 8)] = "PIXEL_WRENCH"),
        (d[(d.MECH_WINGS = 9)] = "MECH_WINGS"),
        (d[(d.SWORD = 10)] = "SWORD"),
        (d[(d.DEVIANT_TAIL = 11)] = "DEVIANT_TAIL"),
        (d[(d.MAGICAL_STAFF = 12)] = "MAGICAL_STAFF"),
        (d[(d.BUTTERFLY_WINGS = 13)] = "BUTTERFLY_WINGS"),
        (d[(d.CAT_BACKPACK = 14)] = "CAT_BACKPACK"),
        d);
let O = {
        [T.R.ICY]: {
            layer: "https://cdn.discordapp.com/assets/content/41ccafcdf7e1b5737b751e6e3e8ac397bba6c5bc523ba26ae1322c7d54d1c736.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c47a2af46e2489573ef55c9061ea03d0e0aaecbabf7d04b165e14bae3aefed4e.png",
        },
        [T.R.CRIMSON]: {
            layer: "https://cdn.discordapp.com/assets/content/42dea4a356335dbb1c8d9846f7500e36bb9b6c8f7af08bf7d0734895a26cc603.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e2a797843dbf054fe7cbdaad4ec204fa20db4fca92fabfae87fb1ef6b3a3b98d.png",
        },
        [T.R.CHROME]: {
            layer: "https://cdn.discordapp.com/assets/content/db853eb8e0bdf79f2fc314597943709b1bb7d555d369316b4101a88109ec3e56.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/d685316bb9efcbad8ac1a9302e66996baacdd436e617da92f3a76f35efbbcd97.png",
        },
        [T.R.GALACTIC]: {
            layer: "https://cdn.discordapp.com/assets/content/56a28d032749ca77b16f9ac0c16cf9f6c97ccb0156cacd8614482c7b21f58452.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/fdbe7a38301fbbdd74e24233b6165cc2d8b40c0d852820725dac2fb15035d126.png",
        },
        [T.R.FOREST]: {
            layer: "https://cdn.discordapp.com/assets/content/8f5fad6695bb0a8858bd84dbe4532c88eafc1ef30b577dcd1b8c4563d4c147d5.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/a3d6788b4b348da78df27318d686ae97a880031a3a5ae57f6726512732a63509.png",
        },
        [T.R.MIDNIGHT]: {
            layer: "https://cdn.discordapp.com/assets/content/4fd5a36e21e079e7e0e453e282e755f8cfaa181760ff41f2d87f048b4bcc744b.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e67f886bb1d9c3b188fa20270ca1920617853d0279eb12ac156dc4cf13464ff4.png",
        },
        [T.R.GLACIER]: {
            layer: "https://cdn.discordapp.com/assets/content/bc83347853dd3794a72582afe27d6d066a13fb7ac4d9f66e2d865cb9e0b2c76b.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8f26b80b2cb3c883c26c3e9b8e6739bb23db713f7c6fe6368f3c7217529e3f4d.png",
        },
        [T.R.ORANGE]: {
            layer: "https://cdn.discordapp.com/assets/content/656e0517c6067b0b98af2d5261eb47e4dab1527ccb467dab012732cada95b3d5.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e3c55fc930d56a3abb4e81560cb463826fcec474594f19dbe7211d3c3ac0954f.png",
        },
        [T.R.PURPLE]: {
            layer: "https://cdn.discordapp.com/assets/content/8edce2801ca7f439f7060c252ee3f406a64c11d7f3642736889398e825be864e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/6cad9be6214a0d42091f6691724f2b99fbf3b62bcea8f1162c423db4d2f8a7b7.png",
        },
        [T.R.RED]: {
            layer: "https://cdn.discordapp.com/assets/content/cf04f39a4501ab1c774074177b7939a5459853795703a94d34a95c9a9fbade89.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/707261bb2e3d4b0079ca079ff05aaf3f6f1dde4925f57bcd5831fc29118f77b3.png",
        },
        [T.R.COBALT]: {
            layer: "https://cdn.discordapp.com/assets/content/a555da0772ad3ed311060b2a265bcd8360add294d321720f8df70fdeec6b8fa8.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8a4c31fbe365ecd96776ad55594db1e99deb2a4bdd61a6f764afcba70f69ca08.png",
        },
        [T.R.X_RAY]: {
            layer: "https://cdn.discordapp.com/assets/content/0f6fae262a257105f206177f1c251991a1337a44a5276ffb809104dadb066dda.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/caae4d6713030ee39529af28364f4df775cfba5500af4b13122d46ca7ccb566a.png",
        },
        [T.R.LIQUID]: {
            layer: "https://cdn.discordapp.com/assets/content/e91d9da2587fe1fe95338f0afdeb23bbadd914057393e230ab252bf56ec2bade.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/081e0335196a24d3310e130e2d7c12606e443dad0a743803472c1229c8283153.png",
        },
        [T.R.BUTTER]: {
            layer: "https://cdn.discordapp.com/assets/content/a982a1f43b46ba9c6e74f1ea55f1b85852b2848622d94f5c5a7460d42fb9400a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/d78d5f973635f07e8a33ca88fd0a390cdbe9e13417815409fb4aa8862c22e0a9.png",
        },
        [T.R.IRIDESCENT]: {
            layer: "https://cdn.discordapp.com/assets/content/662a382c1b56ea62b3df665a0ad9de021ea62ef361ed5f42d87fbbf279ed7c60.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/79e97ecd505488f9af11994096b25df15a52832cf8c625a28e3c0ab142e2f0e4.png",
        },
    },
    R = {
        [N.FANCY_HEELS]: {
            layer: "https://cdn.discordapp.com/assets/content/6841f2f5ac89e055d0d2761c630855980c958ba5f274f89ddfd9087cfcde59b1.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/02ced9db39d622ca77711bad94bb96a8f792ce1257431bd031141093b1a1637b.png",
        },
        [N.SNEAKERS]: {
            layer: "https://cdn.discordapp.com/assets/content/ba88da8eb4612e0ced17340ff7e66c900030fca5bbd3dcdf97cbe2b1ceff23d1.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f37806456e2b05ba1cbc596eb570db27d31d2f0efc622844c261df7ee9ee758b.png",
        },
        [N.SOCKS]: {
            layer: "https://cdn.discordapp.com/assets/content/17e9caddefbca53410e829e76a9b0184007b6c0bdf824310b1dd83ad917d0231.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/feb3ff9c556fff54be362a8c132be1fce01f639d71724d1aa1ed5fb9f3ae3fa5.png",
        },
        [N.WUMPUS_SLIPPERS]: {
            layer: "https://cdn.discordapp.com/assets/content/8e7c3a1c10e9ddd0394ca1723cdc499e8259b0dd159079f7842b50db042bce36.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/de977a05d634ab5e49a1c9ff0ac349bf49e9f2fa6e4f482964fecd613e700762.png",
        },
        [N.BIONIC]: {
            layer: "https://cdn.discordapp.com/assets/content/b1d88b21097c9a455950a0ae127ffdf0172f719e6a5da109799e3d24c7486929.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/2de2e423a6fefbb9346793b0d18210813700f2e0dbfe66e34e3cc0c6d9d0addc.png",
        },
        [N.PLATFORMS]: {
            layer: "https://cdn.discordapp.com/assets/content/6bd66e9f188465671305e2931247f7a076234dde92e5f7262596b8553612266a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/44f671ecfebd96960c0f17f6062abbd9a29e4ef661878a3c7da0d94c2c0a9412.png",
        },
        [N.WESTERN_BOOTS]: {
            layer: "https://cdn.discordapp.com/assets/content/d3375d14235ffce323814e4c3a236ef6ea9153d26d0257bfe7baa0e747e2b3a4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/6e50eb9abe1b756a67cf43f0332015706eba780dcafe4dc8f75ca87c80d46232.png",
        },
        [N.KITTY_PAWS]: {
            layer: "https://cdn.discordapp.com/assets/content/36c1d649d6ece6e07b7540274b1a663dd2dd61a974db9b49e92b05f180ad2afc.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b3ca5b921c5b5c67a9e6983ecfc25c322750a0bc12209858622ebfac28c71148.png",
        },
        [N.ROLLER_SKATES]: {
            layer: "https://cdn.discordapp.com/assets/content/37034def8623ec0ebe803cc6d01d59c3580b1bd81e52362a97d8c483aaaf9464.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/d107e2e9d65040381029649ea6e22eaa70b89799af91fde729c3e3d50b8e38e4.png",
        },
        [N.SNOW_SHOES]: {
            layer: "https://cdn.discordapp.com/assets/content/cd0348c9da275589bebd7116a9b5c59d5e1c19878374f3074a606ed6214d359d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/2c222fc67761dbbd708766f35f087ff32d2871458af6aaa7420645ca5c4ab47b.png",
        },
        [N.ICARUS_SANDALS]: {
            layer: "https://cdn.discordapp.com/assets/content/c9bcebec6899676291265915315a407560e0a03f285511f928270f27a58be915.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/12556513b11831f59d3e639682672208ed86c19ef2d0b24d50783cf186fbfca3.png",
        },
        [N.CLOWN]: {
            layer: "https://cdn.discordapp.com/assets/content/1296acc5d029bcc8f84b726d3f63a2515c3342d2286eb09f74be5f628c384b71.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f0572e244975c60aed3699eed023134a537048e1cf8e358913d23a639a83c7c2.png",
        },
        [N.BALLET]: {
            layer: "https://cdn.discordapp.com/assets/content/9fb1cc48699691cb40f9dec05b6385c37b4dec02104ca1377dc1d8f3c8076b2f.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/344868d33b9419cdbe1ce4b751185d23ff6f1d90eb31c93c3597e92db719fb7c.png",
        },
        [N.CYBER_STOMPERS]: {
            layer: "https://cdn.discordapp.com/assets/content/8d24fbd3b0e7928e3a6425ccb9e5ba55a2ec550e534fd5a829979c09f7ea4c13.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/308dac35a706f85d70cbc6f9908bbd7b1c8e476a77d9e8cfe840c9971bbfe2c2.png",
        },
    },
    L = {
        [S.BADDIE_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/7b9726bacbfe8e327ba65a8a89ec5997e7de032ceb4db3e6bf60a266dd07bc07.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/cbb29a230fa0d275c03bdd254d9e2d135df2fd00313e7c3b76be3e4b2fa777f9.png",
        },
        [S.TRAVELER_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/48a98f7a32f17e0b36dc5486852ab6a6ef7c90ae7f707bbb905174e548a65449.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b27e21dd27d0ff08252578156c92265295f93fbfacbd51d8b6b42278f3a38fd2.png",
        },
        [S.STREAMER_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/9decee8216f89f23364d73d113d0be45c0106b5dce0aa770c692a1dfd01fcad1.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f928f3d065130be38899f31c543d8777fed4f3e3647e9b2292180eaabe621209.png",
        },
        [S.CAMPER_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/5d193a8166bd99027a32f5785342accd11889881ca5207d3c8119c78d7da133c.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/eda2583488b6e9d7ef0f3cb11dc66266a407e3183a5ef0b55cbf68841be264a5.png",
        },
        [S.ATHLETE_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/ae6a15ac1d56cd5340fd0e38bc4e5e57f4988238c74384253a95b95187ce1134.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/cb8f01306b183946f91b463831acd332e304da050e3be47eccfcc59a22d771fd.png",
        },
        [S.COWPOKE_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/2ea6ea5dd18b3f896424d991e60a7191154eeef4ef66a93ef97298f522361f58.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/596f2b6c1a91d03a2576176b6d5026df37f572d7bcf976a6c039e7377322492a.png",
        },
        [S.GOTH_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/764273c505a1226dbf857de1b30463127cff22ae38f004d8dfdd632b57878e22.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/4b5240140ced3cc598da667aab7bc8180592e2de8452b7232df882429d73cfc0.png",
        },
        [S.ASTRONAUT_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/d33aa69e321552f63661b6e9944a093267cb93473028a12623f4b709f4a431d3.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/29b47e5e233cecb1e5394961cea94dd1d110d2e346e8ea4b1a4c92cc079e61df.png",
        },
        [S.JESTER_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/048e018f88baa973299aa48456e169f36718d70ffc0a7cc2301f3117bd509445.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c6433c60adc40ef90ba7b401c6ca323dc565f68c765b8b6dac6ba7ff92c23f72.png",
        },
        [S.TRASH_CAN_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/b97968a4ce89f05e79de4bc07c8270e275b8d2a9b49f2d3dd1be9fa01785744e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/16e8ffd18a60eab88d2c81d95fe996ff94f4193dcbb930cd56838937f2d2e6a0.png",
        },
        [S.MAGE_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/f3844c920bdcbed7e5c05ce7e0224e45c354fef609a17775ac24ce098c4659ce.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/608bc36f6ac62f938150010acd49001b5b107ed2960ad0c299e07b1a5ce949a4.png",
        },
        [S.MECH_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/9d81be125f5e93d0282b8b0d7920ce74eb4c4982c43fbd900679ab7577804cbd.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/6ddbb67f4202c48f27680911db06e8f88a171643adf300a62ace45dd01dd3547.png",
        },
        [S.KNIGHT_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/4f851bde6445c1e8edc8c94132d83a5a5413a060d917540293e35ad0d845aa97.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/810ad2b70eb325bc67b7322720090e2e97362bc4109b5e067b59f9629b21aa80.png",
        },
        [S.MAGICAL_DEFAULT]: {
            layer: "https://cdn.discordapp.com/assets/content/00fa53129ea7484c116734f33a074136b4971636dc5603cb1dcf45ba8c0281ad.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b63f6e6b403ef82327a9394d3b6c95c1b3851c0ad4390e73ae94360ba04ab4a0.png",
        },
        [S.BADDIE_MONOCHROME]: {
            layer: "https://cdn.discordapp.com/assets/content/9e64179c70d38d2e67576607239d9a1c499e5fd09204892e944fae166658ee49.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/ea109c4c309792a16a10ae4c75a5a8a6c8b9b49f4ad4d7ca8206acb6983c7bee.png",
        },
        [S.BADDIE_VIOLET]: {
            layer: "https://cdn.discordapp.com/assets/content/d98efd3a3acdc04fa4f1dc2177200b97747e5bebf8193f539ec8ddf458eab642.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/a5a10c94aed5c12f4ebc3200ff1d052b14f7eb2a952b2bb1257cf50f503a35bd.png",
        },
        [S.BADDIE_PASTEL]: {
            layer: "https://cdn.discordapp.com/assets/content/317d40c486f3d23edcecec4ec43ab2d20528c606f4e80e7dcf1be523efe97819.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/725d21b4420cff0401d72cbce7f1ecc6972ce225e19385ad81293e405e581d9d.png",
        },
        [S.BADDIE_SUNSET]: {
            layer: "https://cdn.discordapp.com/assets/content/41de0b5b547bfe96a4249eecdce3d3c43b0b8e24a2cc42751837d5f7657f0715.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/3bf065a644fb0466db91341ea625a2d4cfcad93566818791cc45f83a44782ea1.png",
        },
        [S.TRAVELER_HAZE]: {
            layer: "https://cdn.discordapp.com/assets/content/40c3ab58d00eb9f832caf33713474b3822ad1e10b2293bcad09486c8d3b2def8.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f54e15408016158120d5b0ebed183635b82e604b22383e36fb58e249659a90ac.png",
        },
        [S.TRAVELER_MOSS]: {
            layer: "https://cdn.discordapp.com/assets/content/83f706783518010c5ce9b77d4f0c422b4f03dcf28007caae7809248122aafb72.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8ab2ef2a24d2e180d4a33a8cba26fe670e950ad38722e657d3aa3743c71af31f.png",
        },
        [S.TRAVELER_CHRONO]: {
            layer: "https://cdn.discordapp.com/assets/content/10bb671531c7e9665d13a7d1c0aab6ad9f3e59eec603201163f4a2a709bfd92b.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b9c819eac78ccc998aaad39073a0a9418fa866a3d4b90d83ed42f99b60b03be8.png",
        },
        [S.TRAVELER_UMBER]: {
            layer: "https://cdn.discordapp.com/assets/content/5f65140050fcfba8503d7aef2dbd185a2da26730cf6bb644820920df2dcd3d52.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/5b31574e229d96bbc726f6518e54db6b8d6c60c51b0a1ad2f3968aa1947ad963.png",
        },
        [S.STREAMER_FLAMES]: {
            layer: "https://cdn.discordapp.com/assets/content/92374b43204afbf9e58c617193462fa3c7ee4e74067d08017a5c998954bf50bb.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/d4d4dd8c31c9905ff2a92e900c3ed46bb7efa589eea362ddb262aee204bfb74e.png",
        },
        [S.STREAMER_STRIPES]: {
            layer: "https://cdn.discordapp.com/assets/content/a4a0f37de8cf18d37defc6c11fcb3a06943ab8d6db375c2d669b3aecd6dd637d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/503fd034c7ce47d4c11c99a149787c8ebd26e9fa3a2251c68d218f9e7f2bee53.png",
        },
        [S.STREAMER_SMILEY]: {
            layer: "https://cdn.discordapp.com/assets/content/62ff2af2a232354f09284847dfc988200142d5ca724b05222a85d43bf33653d9.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/3a7bdc1d14b2da0419de2257c91abefcb0227d9a1eb20d8ac7c6fa98c3c3ee09.png",
        },
        [S.STREAMER_VINTAGE]: {
            layer: "https://cdn.discordapp.com/assets/content/91a9d5406bda14e2b7acd2e73d999046019e2735fe29af5c352d417e15be3c3c.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/647159781f351f742bc813e79624bbc998354f025ebfb4c221ae51687d71b96e.png",
        },
        [S.CAMPER_PLAID]: {
            layer: "https://cdn.discordapp.com/assets/content/7e1acc7120b81fe97e204bacee846a4374f33352393cf5f88090769d2be1dd83.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/193584b801ad1f2fd8d0683ffb5a17c8f96218e7c256b256da753c723dabd53c.png",
        },
        [S.CAMPER_SWAMP]: {
            layer: "https://cdn.discordapp.com/assets/content/d461266bbf4a74bae293f0b87fc08333f213ff995a9203f525d963c320e2331a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/7ea4a58535ac90aa198dcd8dfc424c71a71628c3cc037e2adcca8ee5477936a3.png",
        },
        [S.CAMPER_GLAMP]: {
            layer: "https://cdn.discordapp.com/assets/content/fe73057ca21c0f1e031d30c3c2aa80e586fca8d23c61f05f06497fa224bb8f5d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/0f975b16863605042b0a1717bdacc31ebb3daabefc75a74431b371a21809a556.png",
        },
        [S.CAMPER_AMBER]: {
            layer: "https://cdn.discordapp.com/assets/content/f96bdacce30200f0fa1381f91d71e7b3712430eeffe48f6f74343dc2e6e88f0e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/67447de5628555ce3c4f2f2ad371754da6920b67250c6a8362c6db8860edc711.png",
        },
        [S.ATHLETE_BLOCKED]: {
            layer: "https://cdn.discordapp.com/assets/content/7edcab5e1ddef89c90d9d7abcef1562a142d4d8e367fad5fbc1af32b9efb1afd.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/2b492ce4cf66f821bb4232d9d64d66fad7a36b20a2f8167be8b0f6e644adc2a8.png",
        },
        [S.ATHLETE_FADED]: {
            layer: "https://cdn.discordapp.com/assets/content/30ce48611394fd3edec277ead3b3b1221b34150f5b6449d6e04649e62ce805a4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/eb6d6b8ae028885cf79908a5cd3e6e7dd1eddd95bb3961d7631341ef20b22d6b.png",
        },
        [S.ATHLETE_CHECKERED]: {
            layer: "https://cdn.discordapp.com/assets/content/7baab34155b5e1a8f73d34306e6448029acbc9f38c29fbdca78efe28445c10b8.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/230c11815c7e0715b67caec8e948fc0beddb8367fcabd7ec3937ed46494e8a8e.png",
        },
        [S.ATHLETE_LINED]: {
            layer: "https://cdn.discordapp.com/assets/content/9cadafb1619301edd195ad4ffc9cd4e1fda3357991de34fc95d54d3bfbf417e6.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/51a08d89b372a9ce4dfe8d8fcf7c944015b49c528a82cab7ff6a2415f189aac8.png",
        },
        [S.COWPOKE_ONYX]: {
            layer: "https://cdn.discordapp.com/assets/content/400a27fc78a97fe1554fb923954c53306e3509acfbe62a7036857d4094a32728.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/45e98346666ca573c47d1374781a4c9186ea2455e36109ac923afbc0094e1832.png",
        },
        [S.COWPOKE_STEEL]: {
            layer: "https://cdn.discordapp.com/assets/content/4600f06aa5c48f390360d0bb05187e3e36f2a9325561cc6a940bc5b574faae03.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/219edfe85e19d50d8a888cef3c6243fd9209f7cfc788d890bd51e86e908540c6.png",
        },
        [S.COWPOKE_DENIM]: {
            layer: "https://cdn.discordapp.com/assets/content/3cd3a7769408ade4cf136dd0d1bbdaf3b5f9ddeb5a0ab8d4c270b46fd47829eb.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c9d5fbb9e0f8dd9b9f1ff2d0975d3b92760e4de35cbe6665d36755522e53516e.png",
        },
        [S.COWPOKE_BLUSH]: {
            layer: "https://cdn.discordapp.com/assets/content/ec6b268af3602b1c263b6038089b7d8e76875e7c0256c530275079e31bff34d2.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/64c1dc749d21296ef074aae8b02e025f2a1972010623f6e23bee1fc9825c86a6.png",
        },
        [S.GOTH_SIREN]: {
            layer: "https://cdn.discordapp.com/assets/content/83ef7fa519d6c1f8d3c657cb4314242030b542ace688f697bbe5190bd4356207.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f38b8e21caa77cf6a3620c588f2843084008c4c7d0282f60f8ee0c5e270534c2.png",
        },
        [S.GOTH_SERPENT]: {
            layer: "https://cdn.discordapp.com/assets/content/72f6c21783491855b11be75ab6cbce5cf29db9552097aba839125d353d93c040.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/cfcb54778ce9d63f28d7ac08eeaa753d006a0ab9ad28044dae9711e20d87739c.png",
        },
        [S.GOTH_RAVEN]: {
            layer: "https://cdn.discordapp.com/assets/content/66f5f9a7d60741ba7b3b86bb9371e3a9dca19bbaf63d56f47e2a7bac43857ac7.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c2256a816eddc2a00e2181bfd258937dac4caf6bc2cfaebf6cdc43bfeab6f1d5.png",
        },
        [S.GOTH_VAMP]: {
            layer: "https://cdn.discordapp.com/assets/content/028bd8a95aecba457988835b31a19fff69409010993f0c63c58d3d71a2237360.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/d20f37ed75915e8e00a35b5d59371d41a71f469553939f22dc5cf2b5d8bf614a.png",
        },
        [S.ASTRONAUT_STARDUST]: {
            layer: "https://cdn.discordapp.com/assets/content/734e51d573c6fe5b03ff510d7ffeff9b57d6041f08b6cf03683a1a2034fe8889.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/7ed6cd36e644431f4a76f0307ddf7913f89ebcfd504eb9b8d111aaca50cfdb21.png",
        },
        [S.ASTRONAUT_MARTIAN]: {
            layer: "https://cdn.discordapp.com/assets/content/adf1f54cea16756bc808c847fcc9102c3e5f2bdb7203f85df2236f0e7ccc7e93.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b11f481f0695f73ab24338d520e4526e79b757b03ccbb2fe55f50d054f32ee55.png",
        },
        [S.ASTRONAUT_SOLAR]: {
            layer: "https://cdn.discordapp.com/assets/content/7a2440056c31cebbc1512662a773d8c990c6203c794d2b2a093d7eb18dd3af03.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f1d5544d7d1a6d33159dce0aa0fd7f6d3c8655ce7d24bcc916ef6d090d674ffc.png",
        },
        [S.ASTRONAUT_COSMIC]: {
            layer: "https://cdn.discordapp.com/assets/content/2c9632a774aa1f3a50abc360072ac532ac5c85a18030adde618ad444a0a6560f.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9d8c4b1c485b8bf730dcf65ea4f67c1153002d565c945d9ac6bf3fb80667ede0.png",
        },
        [S.JESTER_CONFETTI]: {
            layer: "https://cdn.discordapp.com/assets/content/d08670a8bf2a072fcff0d80a0df14c3509f5b3f41605f41edcc07b38733a80c1.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/eea402c4d48d4d527155d0f0cb1cf69990cb5f704ab51bf8f30503e85ee83edf.png",
        },
        [S.JESTER_CARNIVAL]: {
            layer: "https://cdn.discordapp.com/assets/content/1149732a4f856a0ac222d9290352b7e19131849d2865b0ec8c67187c3fbe4818.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/31c66a921cc3827b971af666aacc1e4b1ad50997bad808d43fd17d16368dc41c.png",
        },
        [S.JESTER_SUNRISE]: {
            layer: "https://cdn.discordapp.com/assets/content/11aec265b51ffe02d21db8207ba7fc81e79a280b26bd0d798e555c723ac6efa0.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/16a4c0810922a1a476119146b38558f9adaec4d9dbcc856a85a9f4ea62482ece.png",
        },
        [S.JESTER_NIGHTFALL]: {
            layer: "https://cdn.discordapp.com/assets/content/ca071306fc68d101ddfd9b62314676472642174ebf83d680a3e851b3c03b1ef4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/190dc240c42da734cc51b3b7a92ef6ed577bbd3bff42fbdfc7fbe3a51af5fa62.png",
        },
        [S.TRASH_CAN_BLACKOUT]: {
            layer: "https://cdn.discordapp.com/assets/content/416d472ccc987596e3c92ea9d012de0038ea6963a28c7ae715e12f685b973ddb.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/49b9c9117230fb71e457edb17ce9982701fc34240cfa47c62400f00e00f4a194.png",
        },
        [S.TRASH_CAN_CAUTION]: {
            layer: "https://cdn.discordapp.com/assets/content/566d251b3805de86f623ed3d4951c665d12a5e6aa8dc9e93daa6328b4d31c270.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/4c9bb4b4ba470eaa10b8cfa31b28b52a56a7cc0d0d45244274a42831bf5b1e06.png",
        },
        [S.TRASH_CAN_BUBBLEGUM]: {
            layer: "https://cdn.discordapp.com/assets/content/8e438e36cdc4b6c32c611f432d7b3998ed3a528fbd2088d02520b033209cd73a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/a5c3ac8f3b678ad15ad2f8728a884239724d86b7ef128d9a0ff5778f500ed7e7.png",
        },
        [S.TRASH_CAN_TOXIC]: {
            layer: "https://cdn.discordapp.com/assets/content/e4931fe3fea82896417675695fd2109600bf5bf786e97e224a21122e7e57995d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/1ff89b349837df5132c3623319d5db1b0fec7137118c0ecde841e276b2f0731b.png",
        },
        [S.MAGE_SHADOW]: {
            layer: "https://cdn.discordapp.com/assets/content/643e76388848477991900adbafe0156a6214b0066fab82dd72114ebde16727cb.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/92d4ab8bdc281fa9e9631b3f59ef64b225f127a7473560c4c97e0b85e69ce0b9.png",
        },
        [S.MAGE_DUSK]: {
            layer: "https://cdn.discordapp.com/assets/content/fef3627d0d2551d75d9a953e870e6ef3355bb2f085a5a29b797f104a024e7112.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f036579fe4907dc3e812c618527e024cf39426fede02dc110da14268c6292ebc.png",
        },
        [S.MAGE_WILDWOOD]: {
            layer: "https://cdn.discordapp.com/assets/content/92f14b15aad88dd0ecb2e69b8583b6a1e1c5aa18e423e30f9ea9563059131125.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/fbcbc02dd46a450b4950f355a5c0ebe42a4d0a5a13987477f0de04ab90b651c9.png",
        },
        [S.MAGE_WINTER]: {
            layer: "https://cdn.discordapp.com/assets/content/ddebc8268177d0ba3303f9e9f204b37fe9fedb10b84b92452b1e59ace54e3b78.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/3b3653bf594aa01a5c9b5b42fb9ecde76f0f6bd21dbdad5cd587cb0113834458.png",
        },
        [S.MECH_AERO]: {
            layer: "https://cdn.discordapp.com/assets/content/3e9a63c2c08ff442f8bce5b868ad68eddc66155f57c0719c50a832d6ae9d0aea.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/dcd60a94a4013005615f0c4c98cde51159258833d3c32d9e9ad1431e9a686065.png",
        },
        [S.MECH_VIPER]: {
            layer: "https://cdn.discordapp.com/assets/content/2f5d29173aef0239458a073f582225f0e525428f1acaa24a822430638eb6bd97.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/26f4edae4eb4943b80824423291f6f268f3a644a0b2a0d82b0463245cd01fbe3.png",
        },
        [S.MECH_ULTRAVIOLET]: {
            layer: "https://cdn.discordapp.com/assets/content/5e8065deddb2a58ee29bed0a3de24da467faf6144bc7b703da6d99bf17b7f86d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/12860fafd7ce70b1691f1e66c07f72065b0782b9d885d9220155853fcabe6960.png",
        },
        [S.MECH_SANDSTORM]: {
            layer: "https://cdn.discordapp.com/assets/content/535daef3e064904b9fff559df49bf0b3926cb4f44d1a0feb40ea27d6077d6fd6.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/24b7f3b3d51a0b0ec9d35ec39a8bcd7c073983aaf7ede59313e824289c793696.png",
        },
        [S.KNIGHT_IRON]: {
            layer: "https://cdn.discordapp.com/assets/content/f807d84394b8bf30932b702b428607e1a38717032aa1d798407a51a5f1571b0b.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/eab457cc4ca6159bb48fe8db3ed615b66360685b654e4ec2c76ff3aeb468d433.png",
        },
        [S.KNIGHT_RUST]: {
            layer: "https://cdn.discordapp.com/assets/content/419d717f1d477cfe67cae1a20233a41013ae0f4e6edadc8f12c22b8c08ce3fc4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c26685de759049367529c36e699b1ee0d62a52994b6eb64244e42ceae3857b21.png",
        },
        [S.KNIGHT_PETAL]: {
            layer: "https://cdn.discordapp.com/assets/content/884c8377498e45b182292aefb950eda87961ddfccd17c2823ebc89185c505826.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e03514f6428b195a36bd0631adad041ff26f8452e669642e3d7c94eded6e7c31.png",
        },
        [S.KNIGHT_GLACIER]: {
            layer: "https://cdn.discordapp.com/assets/content/5c2664ef0448b7277f7669ecca90a12040d436fab5114a3fbe0df601748fe350.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/7218175ed52466ddb3dc81bc2fec5d84e4a09f6a52f061b70540ef711754f6e3.png",
        },
        [S.MAGICAL_SAPPHIRE]: {
            layer: "https://cdn.discordapp.com/assets/content/4ef3f5adc7fb3201013357f081fecd7b6e809d9e405664b12be5bb36250a3d0e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8d7d8b58755880ed35ceab216ff36cc678d981cf724b8a64937a592eb103f15f.png",
        },
        [S.MAGICAL_AMETHYST]: {
            layer: "https://cdn.discordapp.com/assets/content/d5e82e0e1d022c176ae162c9d6f1114313f8b1f92077998a7a7869302431fb90.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/65a4290c2776c55d94aaa7115e2ea5342fe141526033f80158531bbf439f9d64.png",
        },
        [S.MAGICAL_FROST]: {
            layer: "https://cdn.discordapp.com/assets/content/6a21ceebf03312f168d3f47ccc79796ba0381385acd4a0c63069b8351868c733.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/de57d423af8dc045cb2d9da2a08bad5ceb36d4ab428542d405c0ff4e2d29b001.png",
        },
        [S.MAGICAL_CITRINE]: {
            layer: "https://cdn.discordapp.com/assets/content/3ab946581b2f15504795eeff4f21fb83675ade4793b471da22423b66b8c8a706.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e48d7443a8d5f24d7d83b1fa383207099c57808d1ed20905065b45dfa64bee2f.png",
        },
    },
    y = {
        [m.CHILL]: {
            layer: "https://cdn.discordapp.com/assets/content/e9ab4e79b0b185d1fbd0a99813e4c20b7816d96fb1ebcb29347f6c6ed204efd0.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/c207468b584a2681ce9b6b11bb4c52dce1a33746fa629723752043d772392547.png",
        },
        [m.CRY_BABY]: {
            layer: "https://cdn.discordapp.com/assets/content/4516a802ee3bbedd2819f7a4917e3e618d8602960e76cc04c4e30e4cd49fbeae.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8aa35463ecd0df5529437cf3de897d18a6f13c7884b4772e4f3c2f5ca9b0fe57.png",
        },
        [m.BORED]: {
            layer: "https://cdn.discordapp.com/assets/content/1b3965b0949454ee4bcc3e69e11c29dfa64ab84c32c2679a9376b115d6f6b5f6.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9b2515211d96d1196770490153d27ae0db8d404a8458294f5ebeba9eb33058cc.png",
        },
        [m.LOCKED_IN]: {
            layer: "https://cdn.discordapp.com/assets/content/142051b323dcafd0b36b1b82ec3d3bfd4f43905710c518d6b197d4afce145a94.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/761626ea0313d19e4b0b7878d3227d0875e494f791de555a170b2d76afb6609e.png",
        },
        [m.SMITTEN]: {
            layer: "https://cdn.discordapp.com/assets/content/c677e2daeb74f7dd29c805b4b4975259f2220113bfc2a64e5ca0fda18512b718.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/feadc4bdb091fd530757fcb54a6cc53ba2f9091ad23a3c3c15ae0b6c5504a256.png",
        },
        [m.CONFUSED]: {
            layer: "https://cdn.discordapp.com/assets/content/5377c59e9c5a3ddf63510256e71e4bde8678128ef7ffdaef5e9ddbef0dabe656.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/add1436b9f98f3eb53e75fa27c992f47fa92f8b874db53a1c394294c3169cc13.png",
        },
        [m.ANXIOUS]: {
            layer: "https://cdn.discordapp.com/assets/content/6cf1602f3dbaaea60fdefb78062564d241556099ff2c34563b60263a47f84286.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/422577eecd09efc822c28f1d743d185d9a5c62d417147602d09962f9f6d47f76.png",
        },
        [m.SPARKLY]: {
            layer: "https://cdn.discordapp.com/assets/content/4e9b91839b876615d6e505bb946b6a492fdc894530cbbd7bc09ed259faa8a93d.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9fa5a7f63661b8fdff860ecdd947f67e7ebda460c1d8b216a02ddd6f618ef888.png",
        },
        [m.RAGE]: {
            layer: "https://cdn.discordapp.com/assets/content/ec7722c4731f6772746ca3fc03cac77555fe06e11a8cf3298b26586c52516364.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/426855b4313f173705cf314c93c509b87f57b8c047e0604adf39de46a062128f.png",
        },
        [m.SUS]: {
            layer: "https://cdn.discordapp.com/assets/content/dbc924c677e7c1dd7ec8e3d9232b8556a93332418dfd6047356a42907dc0a4c3.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/3299649be98e9b312ec17c78b7ea99989a44c66acc04822e451608aeda592e2f.png",
        },
        [m.SPELLBOUND]: {
            layer: "https://cdn.discordapp.com/assets/content/52b7d4c49996e0967eb16e29f9823567371d27e0e4d07dc5afca9e8acb8aed55.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/6e39970263f772b660d050e7172da19f4d1374c0b861fecb4f2a415dacfb5e5f.png",
        },
        [m.CURSED]: {
            layer: "https://cdn.discordapp.com/assets/content/971d19d44fdf6624a538d21fa3944ddfd2594a5eac7796cd69e07c7bfaa594c8.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/4b5a0d4d91798ffc6dff61956e102d3279f327c9669edea98f369ba286f5c21d.png",
        },
        [m.FREE_FALL]: {
            layer: "https://cdn.discordapp.com/assets/content/300133e740792cebfca6109d161a38b3519e687f15cbd165ca737a2c1fc37029.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/dc6d5a9486c3c70d5509f20d0ba8da6ec3dc61b21ff60b3ac2ca7e5f347f7288.png",
        },
        [m.POSSESSED]: {
            layer: "https://cdn.discordapp.com/assets/content/cfaf5e68234395337dfa6c1a5e4e345604367b8dab8c82d9b104b01cb7b1bfa2.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/fcb1c25c94886ed8e0d4521d0072f1ebe93acfcd2ce31a82c530ac6ac733cfe9.png",
        },
        [m.AWKWARD]: {
            layer: "https://cdn.discordapp.com/assets/content/1267f9cce7a00e54f56399a1871bd9bf556fca1c714e4af4a36c394dd91702cd.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/fb409ae8fb4edf94583a815c5548a60b6451ef2f016a3374832f4588e31f1f93.png",
        },
    },
    D = {
        [g.CAP]: {
            layer: "https://cdn.discordapp.com/assets/content/8ffe29263b07b0bb095d875ee43d6a1b9b7c7c6bde684cd136d02f66ef250802.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/dee068a3cf77d9456145873e6d43d54c29b4c3adbf76e6f08f9b143453b171cf.png",
        },
        [g.ELVEN_HEADPIECE]: {
            layer: "https://cdn.discordapp.com/assets/content/597c0366d6235b303237cbb60cc113d15fa17c464b5009600f2b4d124769fcab.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/a6bee017b79be1c6c71ac03b9bb969ba5299c639fd95a03ed7d08e36df2b87ee.png",
        },
        [g.HEADPHONES]: {
            layer: "https://cdn.discordapp.com/assets/content/295eefe6b450b8e43b298f0688aea1cc508decf9362998ba1466677ae31f8f75.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b746828b959dd2177ca12ec63ee98c7fac4f7685dc164f4b6426a5273eb7f94e.png",
        },
        [g.TEDDY_BEANIE]: {
            layer: "https://cdn.discordapp.com/assets/content/2f8aaa52dfd43b307c7d2c9b09d2a73e4ffe4ab39a9a30796dd08b78467a6784.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/15865bba265df5e3a07db012c3594476fdccbc1bc4dab502725385bb46fc5b6b.png",
        },
        [g.PIERCINGS]: {
            layer: "https://cdn.discordapp.com/assets/content/c066c422c1441486e49479da3afb44f39290e1c1bb2edcf621dc3d05c5741395.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/81072e9807dd9e7eefa1cfce48065a625429ae03edec0ff1ce539566b5563ef9.png",
        },
        [g.HEADBAND]: {
            layer: "https://cdn.discordapp.com/assets/content/2ed51093e8d35ef859afe2baaacbd10bb8c81584e34062cb0a1af56e4e32bbc7.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/7c966e44619d395e9f17076e15d8954e0abcce6207698341c987b494edda3913.png",
        },
        [g.SUNGLASSES]: {
            layer: "https://cdn.discordapp.com/assets/content/bed5158470ee71762f2edbbcd097112acea7237e99679d5d4169938883995908.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e309b26c2f46db12873a35d17ff32326d5b9a6e200c063ac12bef95f44df2562.png",
        },
        [g.BANANA_PEEL]: {
            layer: "https://cdn.discordapp.com/assets/content/a63c016d1074b2375aa846ea276c94321b96ebb3f3557a4140ab0d998f34f7ad.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/ab2b0a18863bf6747de393ac51eba95c2de338267c59353a6e462987e58de981.png",
        },
        [g.LEAF]: {
            layer: "https://cdn.discordapp.com/assets/content/235ac19df21dc3a8ca313dfbb0c6b229eb7e3a62f68e5ec87a7d038e87c71e7e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/463cb73f4df5b04f73e2f3103785b11ae45a2a2eab0619b5c35ebc21c6c259d5.png",
        },
        [g.FIRE]: {
            layer: "https://cdn.discordapp.com/assets/content/615f4a68af50cfb93007ea9535472420d87411724e5fd59f8ff7473ce1b09b03.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/b59b9aba62af7f105dbebf61fe91b342e469315996c4541a9e869031c4cf8eca.png",
        },
        [g.HALO]: {
            layer: "https://cdn.discordapp.com/assets/content/77a2dd10f56761a88b4db74af7dd65baab1c4b26cca2e9f9d346422f5c3fb63e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/e18ecaf0d3775e1a91ba87f19e3ff1128628b49eab9b51ad6db14e2beef89b54.png",
        },
        [g.BRAIN]: {
            layer: "https://cdn.discordapp.com/assets/content/b21794ae4853b8a46f40c1437d1136427e7caf41ce712b6d833befe6f89dfd2a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/128fb1ce81e5fa1853a5080004b4942e7401617f15f76e0bcbd2360d94304ffe.png",
        },
        [g.TRAFFIC_CONE]: {
            layer: "https://cdn.discordapp.com/assets/content/b89fc59f1cfc3ad68728a3889911e30da9a61ba5208a84663c119023e1c5a1ea.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/1c981f3fe20f25dbb75068da0a15b76a03f7299cd3b2b7ae79b3342ce4327ca2.png",
        },
        [g.CROWN]: {
            layer: "https://cdn.discordapp.com/assets/content/5341a5f8d36ea812dd307619b017ddebd8e92eaf0835679c08970dedeb0baa61.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/77a7810d5f67eea49f67704b2bfe9e678029d4fca0c323f3a88dba8fe7449600.png",
        },
    },
    v = {
        [C.ANGEL_WINGS]: {
            layer: "https://cdn.discordapp.com/assets/content/633af581c14b8c0be3c1febbb8f2837439d6d7080333e7bff74bcd9f6152cc17.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/5d4227f60eb27908ad9b638eaac064773114abb91ff0dc072df0a935e8b5d622.png",
        },
        [C.STICKERS]: {
            layer: "https://cdn.discordapp.com/assets/content/9bcce4e6e4b1c7f3846dfac67bd1014d962fad12310980bb16ddf6c39be6ac52.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/0e24c952d5efd881c3b3ee0517b72a8766ae37f6a75c19c71720883281becf5f.png",
        },
        [C.TOTE]: {
            layer: "https://cdn.discordapp.com/assets/content/8a10225ecbb834ac378acead144db792f59e77a0b57c48f193e13834c58a262f.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/486af2e8f7d879bb963b883e949f8c6c15afb79d163687a09c2d2d086a078333.png",
        },
        [C.WIZARD_STAFF]: {
            layer: "https://cdn.discordapp.com/assets/content/7c1216082779c2bbddc70fb6cc489d588918c15d7aba51c76fa851079734bcb4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/24310231b6ec942a0b08963a359b6b7bee72e83fc79338169944abe38493ec60.png",
        },
        [C.SKATEBOARD]: {
            layer: "https://cdn.discordapp.com/assets/content/826fb178d67b7c880f3fc028df31007626378e5fa146ae7d657de942817256e3.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/5dac749c0d7de0e325b0f6fbd693340ee13d46125c1229e34733ee93ed46a170.png",
        },
        [C.TAKE_OUT_BAG]: {
            layer: "https://cdn.discordapp.com/assets/content/d4400f06534f3c13806961fce1967eca62229035aacaace5ac481f37e9037a48.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9b53664a204019b26d936f0ff2b6b78892c5367474a6ecf2d1d4020714adefd3.png",
        },
        [C.PIXEL_WRENCH]: {
            layer: "https://cdn.discordapp.com/assets/content/88080d8637f320435518e9068fbe3612a33782ac9541d029d9d4e01047e18079.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/64b2a36cd57ac061943cc721fad4f655de028aae352e93979ff6b8cc35e71f72.png",
        },
        [C.MECH_WINGS]: {
            layer: "https://cdn.discordapp.com/assets/content/a11a2369215180fed765f31b0fc1c61e97beaf5c6a558eb00c15f37ee5d05280.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/8108cdfeb84bdf9c686a72507e5de75a8516f78618d6bf344b5d36f0b2662c35.png",
        },
        [C.SWORD]: {
            layer: "https://cdn.discordapp.com/assets/content/3e4da2243ce40a939ede0a0b0cb8f9d9641085270a72cdd5f5b7d7382a0a66c3.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/557715a5bd5fa45cc6acb68e8a21a34d79c696267b3c119d9c9669ed744c684b.png",
        },
        [C.DEVIANT_TAIL]: {
            layer: "https://cdn.discordapp.com/assets/content/97bf9f6d023ff67a8913affc9bb5cda2a3dfdcf24c4fff2de71bc470c51a9fc2.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/7d2b24a476a3ce38566cc627e6962a7c93529e6fa1e4c5e33c4a45a9aab68899.png",
        },
        [C.MAGICAL_STAFF]: {
            layer: "https://cdn.discordapp.com/assets/content/a12bb27b19e630665db42418995061d4aa47cc4faeacdfd993012b96f15367d2.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f2b33f54d15c1d3557feaf67cf990bd133f5467efbc8752b5fc6c3aacae5679c.png",
        },
        [C.BUTTERFLY_WINGS]: {
            layer: "https://cdn.discordapp.com/assets/content/7057fdaf6c54f250ec1cba99adb966efb083e497bb380e13be7c27599d83c2d8.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/ba5c1bba24c554f352bba21fadac2bc7f0a72b287a1539048f79217751ec1bb5.png",
        },
        [C.CAT_BACKPACK]: {
            layer: "https://cdn.discordapp.com/assets/content/948bb2347f3052693136308f7bbd229850f076c1d2ceb02f6e417abd585320c0.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9c35c83bd4917c04dd2d94b15e20f6f7ee18f62d9964a1218c22596afcbb1eef.png",
        },
        [C.DRAGON_WINGS]: {
            layer: "https://cdn.discordapp.com/assets/content/2c32c768f724b6d499b15a0c7dcfdf61c16b20e330c644b866f2252f8b1c3d86.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/1ee481478fcf076e95c42ecadbf9a79540ef00b3205c703ea7c55bf5f160f403.png",
        },
    },
    b = {
        [p.BLAZE]: {
            layer: "https://cdn.discordapp.com/assets/content/1decc7c648d16e2441e90ef4f8f67c288526839f9e490e96e42f835969cd3812.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/5f2f4167b9bc400addbd70d7a18e69b4a6b9ddd10ee9dc25c6e4d0cadb631c0e.png",
        },
        [p.BLOSSOM]: {
            layer: "https://cdn.discordapp.com/assets/content/3ddf155cbd9c25209c1d77916ba17d59dcc2606aae46e86a846627030d9bd820.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/282ba1d816d53e98fe7259f8f5085bbb8d032da6011bc316ab8a6cef5bd5567b.png",
        },
        [p.PRISM]: {
            layer: "https://cdn.discordapp.com/assets/content/e5db06d596194753e185e6b40252c47f9aa31ae90bd743efbce4627453350457.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/0fd1b1d56bf2a0e6bfe0350193888ec980efcca21990db3a42094b9180bdd461.png",
        },
        [p.SHOCK]: {
            layer: "https://cdn.discordapp.com/assets/content/ff1906af162ae638d4a9570abeeded3d53b9ea0ff392277fb3bb8ae5900f81a1.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/50e8123b3b6e12797ef9d1b0902e9ed4f0d5d2c89ef971059df29f5232196a98.png",
        },
        [p.FATED]: {
            layer: "https://cdn.discordapp.com/assets/content/ac51b1184cb7f3c7e3767d09d5b39277c2e4f40ca8a4d6237eb9db8df1161d51.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/15767fa02378f0c320bb8dcf47baeb681d0e75436d51ee7951a236a4684cddbb.png",
        },
        [p.LUSTER]: {
            layer: "https://cdn.discordapp.com/assets/content/e9b60b8f4be02182bbb14b9426e49eeb9f76dfb4e9ac27088ae5539b57d5e38e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/42ae243ef9be2e3dd193972ba2cd43e010216b99426f5cca0051395a8dc05dea.png",
        },
        [p.BUBBLES]: {
            layer: "https://cdn.discordapp.com/assets/content/5ade807b08e0e29b276e8af47f0f7be7d6b4b5481289094ac2bf5e7f54a14af4.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/227c56c2a765d9f9ea704f3046c46e86f6ac3cf1a4311dfb96eb75d8100b0b6d.png",
        },
        [p.SPOOKY]: {
            layer: "https://cdn.discordapp.com/assets/content/57bfcc6a43ce91d9fafc23e3d07ce8d66eaf8c219eb679282eaaa23a9c2975c9.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/09ab163133023aadb80172e714a28c75f91866edb715c61210d2adc042cea5ba.png",
        },
        [p.CURSED]: {
            layer: "https://cdn.discordapp.com/assets/content/2c9f03bd019b2b5e0b6494b917979035bbd26f049f6646d04961fed30fcbb1c2.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/cd5d7b0d2a60265b2c3c73a46ad40c570528f5db3a43a9b81f8e8610331f1dc9.png",
        },
        [p.MAGNETIC]: {
            layer: "https://cdn.discordapp.com/assets/content/5f51056b11cf3dd33ec4d9ba9ee7f06e001d5bd3d82da07ee15b8c769bc36dff.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/ae13efba395ff4192ce6c6e101b4a351d417159fb32a3c75bc33239dad590f8c.png",
        },
        [p.RADIOACTIVE]: {
            layer: "https://cdn.discordapp.com/assets/content/d7dcc44884e5de94a2b2b193d9c3ca4c87a156b1bc3135c7675bf49af54cf34e.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/f6359df8f30d9c54f5a3462678302ac253855dc947f0ada64bf4410ec4544cc0.png",
        },
        [p.ELEMENTAL]: {
            layer: "https://cdn.discordapp.com/assets/content/737310192467869af6e8081cd3c22816b4a2634fe13d60eebf80f2a6224d7c1a.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/72060fd8f97b072e03baf1b241394d83186a71a1931a56e5d261bfc0027d0a41.png",
        },
        [p.SHIMMER]: {
            layer: "https://cdn.discordapp.com/assets/content/a4569e741fb499e18d8d1eeb39b9dbef79edc7504f2d6cf53235c8de01f0b4ee.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/0553d5fc00018c9aabd5d160ec4f17a3e5d8bcb0979cec62b386949c2b71ac82.png",
        },
        [p.WITCHY]: {
            layer: "https://cdn.discordapp.com/assets/content/e5e8afe2c16ec7945afb6b824695fd60558c7a44502580ec402791c337d4bf85.png",
            thumbnail:
                "https://cdn.discordapp.com/assets/content/9e0af743bf75bac703e3a5f4bb4b6510c33e1fc5640a08b76bce37c1bdc31f82.png",
        },
    };
var P = n(142617),
    M = n(443155),
    U = n(954874),
    w = n(225380),
    G = n(105292);
function x(e) {
    var t, n;
    return (0, P.wV)("transformCheckpoint2026CardComponent") && (null != e.character || null != e.stats)
        ? {
              version: e.version,
              character:
                  null != e.character
                      ? {
                            base: (t = e.character).base,
                            shoes: t.shoes,
                            outfit: t.outfit,
                            face: t.face,
                            hat: t.hat,
                            wearable: t.wearable,
                            aura: t.aura,
                        }
                      : void 0,
              stats:
                  null != e.stats
                      ? {
                            totalVoiceMinutes: (n = e.stats).total_voice_minutes,
                            numMessagesSent: n.num_messages_sent,
                            numEmojisSent: n.num_emojis_sent,
                            totalDaysPlayed: n.total_days_played,
                            topEmoji:
                                null != n.top_emoji
                                    ? {
                                          emojiId: f.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id)
                                              ? n.top_emoji.emoji_id
                                              : void 0,
                                          emojiName: n.top_emoji.emoji_name,
                                      }
                                    : void 0,
                            topGuild:
                                null != n.top_guild
                                    ? {
                                          guildId: n.top_guild.guild_id,
                                          guildName: n.top_guild.guild_name,
                                          guildIcon: n.top_guild.guild_icon,
                                      }
                                    : void 0,
                            topGuildNumDaysInteracted: n.top_guild_num_days_interacted,
                            topGame:
                                null != n.top_game
                                    ? {
                                          applicationId: n.top_game.application_id,
                                          applicationName: n.top_game.application_name,
                                          applicationImageId: n.top_game.application_image_id,
                                      }
                                    : void 0,
                            powerLevel: n.power_level,
                            powerLevelPercentile: n.power_level_percentile,
                        }
                      : void 0,
          }
        : null;
}
let k = { [c.BASE]: O, [c.SHOES]: R, [c.OUTFIT]: L, [c.FACE]: y, [c.HAT]: D, [c.WEARABLE]: v, [c.AURA]: b };
function F(e, t) {
    let n = u.has(e.wearable) ? E : _,
        i = [];
    return (
        n.forEach((n) => {
            let r = e[n],
                a = k[n][r]?.layer;
            null != a && "" !== a && i.push(`${a}?height=${t}&width=${t}`);
        }),
        i
    );
}
function B(e) {
    return { text: e, accessibilityLabel: e };
}
function V(e) {
    let t;
    return {
        powerLevel: new Intl.NumberFormat(G.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }).format(e.powerLevel),
        powerLevelUnits: Math.min(Math.max(Math.round((e.powerLevelPercentile / 100) * M.w0), M.Qq), M.sh),
        voice: {
            text:
                (t = Math.round(e.totalVoiceMinutes)) > 0
                    ? (0, I.oO)(t)
                    : G.intl.formatToPlainString(G.t.iXLF9W, { minutes: t }),
            accessibilityLabel: G.intl.formatToPlainString(w.default.lw35aH, { duration: (0, I.GM)(t) }),
        },
        messages: {
            text:
                e.numMessagesSent > 0
                    ? e.numMessagesSent.toLocaleString(G.intl.currentLocale)
                    : G.intl.formatToPlainString(w.default.foKBCN, { count: e.numMessagesSent }),
            accessibilityLabel: G.intl.formatToPlainString(w.default.IdRUAC, { count: e.numMessagesSent }),
        },
        topGuildDaysInteracted:
            null == e.topGuild
                ? B(G.intl.string(w.default.GultYJ))
                : {
                      text: G.intl.formatToPlainString(G.t.GBLpQ8, { days: e.topGuildNumDaysInteracted }),
                      accessibilityLabel: G.intl.formatToPlainString(w.default.MpSH8v, {
                          days: e.topGuildNumDaysInteracted,
                      }),
                  },
        topGuildName:
            null == e.topGuild
                ? B(G.intl.string(G.t["52UOf9"]))
                : {
                      text: e.topGuild.guildName,
                      accessibilityLabel: G.intl.formatToPlainString(w.default["9UTJ+t"], {
                          guildName: e.topGuild.guildName,
                      }),
                  },
        reactions: {
            text:
                e.numEmojisSent > 0
                    ? e.numEmojisSent.toLocaleString(G.intl.currentLocale)
                    : G.intl.formatToPlainString(w.default.RHYx1k, { count: e.numEmojisSent }),
            accessibilityLabel: G.intl.formatToPlainString(w.default["36qpUG"], { count: e.numEmojisSent }),
        },
        topEmojiName:
            null == e.topEmoji
                ? B(G.intl.string(G.t.lxsmBd))
                : {
                      text:
                          null == e.topEmoji.emojiId
                              ? h.Ay.convertSurrogateToName(e.topEmoji.emojiName)
                              : `:${e.topEmoji.emojiName}:`,
                      accessibilityLabel: G.intl.formatToPlainString(w.default.CcBo8C, {
                          emojiName: e.topEmoji.emojiName,
                      }),
                  },
        daysPlayed: {
            text:
                e.totalDaysPlayed > 0
                    ? G.intl.formatToPlainString(G.t.GBLpQ8, { days: e.totalDaysPlayed })
                    : G.intl.string(w.default.mg1NPe),
            accessibilityLabel: G.intl.formatToPlainString(w.default.LYcKX7, { days: e.totalDaysPlayed }),
        },
        topGameName:
            null == e.topGame
                ? B(G.intl.string(G.t["5eYZiW"]))
                : {
                      text: e.topGame.applicationName,
                      accessibilityLabel: G.intl.formatToPlainString(w.default.kLqpNC, {
                          gameName: e.topGame.applicationName,
                      }),
                  },
        topEmoji: e.topEmoji,
        topGuild: e.topGuild,
        topGame: e.topGame,
    };
}
function H(e) {
    let t = e.components[0];
    return null == t || t.type !== A.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function j(e) {
    switch (e.version) {
        case M.wk.V2025:
            return G.intl.string(U.default.goiR2u);
        case M.wk.V2026:
        default:
            return null;
    }
}
