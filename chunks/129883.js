n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
    longPressToSelect: `Dlouh\xfdm stisknut\xedm p\u{159}ejdete do re\u{17E}imu v\xfdb\u{11B}ru.`,
    select: "Vybrat",
    selectedAll: `Vybr\xe1ny v\u{161}echny polo\u{17E}ky.`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `Nevybr\xe1ny \u{17E}\xe1dn\xe9 polo\u{17E}ky`,
            one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`,
            other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek`,
        })}.`,
    selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`,
};
