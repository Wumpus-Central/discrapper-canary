n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) =>
        `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    longPressToSelect: `\u{C120}\u{D0DD} \u{BAA8}\u{B4DC}\u{B85C} \u{B4E4}\u{C5B4}\u{AC00}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    select: `\u{C120}\u{D0DD}`,
    selectedAll: `\u{BAA8}\u{B4E0} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `\u{C120}\u{D0DD}\u{B41C} \u{D56D}\u{BAA9}\u{C774} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}`,
            one: () =>
                `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`,
            other: () =>
                `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`,
        })}.`,
    selectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
};
