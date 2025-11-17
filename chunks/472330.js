n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
    longPressToSelect: `Naci\u{15B}nij i przytrzymaj, aby wej\u{15B}\u{107} do trybu wyboru.`,
    select: "Zaznacz",
    selectedAll: "Wszystkie zaznaczone elementy.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `Nie zaznaczono \u{17C}adnych element\xf3w`,
            one: () => `${t.number(e.count)} zaznaczony element`,
            other: () => `${t.number(e.count)} zaznaczonych element\xf3w`,
        })}.`,
    selectedItem: (e) => `Zaznaczono ${e.item}.`,
};
